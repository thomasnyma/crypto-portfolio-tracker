import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { NgAisIndex } from 'angular-instantsearch';
import { NgAisInstantSearch } from 'angular-instantsearch';
import { TypedBaseWidget } from 'angular-instantsearch';
import {
  SearchBoxConnectorParams,
  SearchBoxWidgetDescription,
  SearchBoxRenderState,
} from 'instantsearch.js/es/connectors/search-box/connectSearchBox';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { noop } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent extends TypedBaseWidget<
  SearchBoxWidgetDescription,
  SearchBoxConnectorParams
> {
  @ViewChild('searchBox', { static: false })
  searchBox!: ElementRef;
  @Input() public placeholder: string = 'Search';
  @Input() public submitTitle: string = 'Submit';
  @Input() public resetTitle: string = 'Reset';
  @Input() public searchAsYouType: boolean = true;
  @Input() public autofocus: boolean = false;

  // Output events
  // form
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();

  // input
  @Output() change = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();

  public override state: SearchBoxRenderState = {
    query: '',
    refine: noop,
    clear: noop,
    isSearchStalled: false,
  };

  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('SearchBox');
    this.createWidget(connectSearchBox, {});
  }

  public ngAfterViewInit() {
    if (this.autofocus) {
      this.searchBox.nativeElement.focus();
    }
  }

  public handleChange(query: string) {
    this.change.emit(query);
    if (this.searchAsYouType) {
      this.state.refine(query);
    }
  }

  public handleSubmit(event: Event) {
    // send submit event to parent component
    this.submit.emit(event);

    event.preventDefault();

    if (!this.searchAsYouType) {
      this.state.refine(this.searchBox.nativeElement.value);
    }
  }

  public handleReset(event: MouseEvent) {
    // send reset event to parent component
    this.reset.emit(event);

    // reset search
    this.state.refine('');
  }
}
