import {
  Inject,
  Input,
  Component,
  ContentChild,
  TemplateRef,
  forwardRef,
  Optional,
  ViewChild,
} from '@angular/core';
import { NbContextMenuDirective } from '@nebular/theme';
import { connectHitsWithInsights } from 'instantsearch.js/es/connectors';
import {
  HitsConnectorParams,
  HitsWidgetDescription,
  HitsRenderState,
} from 'instantsearch.js/es/connectors/hits/connectHits';
import {
  TypedBaseWidget,
  NgAisInstantSearch,
  NgAisIndex,
} from 'angular-instantsearch';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-search-hits',
  templateUrl: './search-hits.component.html',
  styleUrls: ['./search-hits.component.scss'],
})
export class SearchHitsComponent extends TypedBaseWidget<
  HitsWidgetDescription,
  HitsConnectorParams
> {
  @ContentChild(TemplateRef, { static: false })
  public template?: TemplateRef<any>;

  @ViewChild(NbContextMenuDirective)
  contextMenu!: NbContextMenuDirective;

  @Input() public escapeHTML?: HitsConnectorParams['escapeHTML'];
  @Input() public transformItems?: HitsConnectorParams['transformItems'];
  public searchResults: any[] = [];

  public override state: HitsRenderState = {
    hits: [],
    results: undefined,
    bindEvent: undefined as any,
    sendEvent: undefined as any,
  };

  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('Hits');
  }

  override ngOnInit() {
    this.createWidget(connectHitsWithInsights, {
      escapeHTML: this.escapeHTML,
      transformItems: this.transformItems,
    });
    super.ngOnInit();
  }

  public override updateState = (
    state: HitsRenderState,
    isFirstRendering: boolean
  ) => {
    if (isFirstRendering) return;
    this.state = state;
    this.searchResults = this.state.hits;
  };
}
