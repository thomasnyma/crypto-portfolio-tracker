require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-yoga */ "graphql-yoga");
/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_yoga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nomicsConnector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nomicsConnector */ "./src/nomicsConnector.js");


const NOMICS_API_KEY = '656168ea65bbcbbd4b425c89446b2ed7';
const typeDefs = `
  type Coin {
    currency: String
    id: String
    status: String
    price: String
    price_date: String
    price_timestamp: String
    symbol: String
    circulating_supply: String
    max_supply: String
    name: String
    logo_url: String
    market_cap: String
    market_cap_dominance: String
    transparent_market_cap: String
    num_exchanges: String
    num_pairs: String
    num_pairs_unmapped: String
    first_candle: String
    first_trade: String
    first_order_book: String
    first_priced_at: String
    rank: String
    rank_delta: String
    high: String
    high_timestamp: String
  }

  type Query {
	  getCoinInfo(currency: String!): [Coin]
  }
`;
const resolvers = {
  Query: {
    getCoinInfo: (root, variables, context) => context.nomics.getCoinInfo(variables.currency)
  }
};
const server = new graphql_yoga__WEBPACK_IMPORTED_MODULE_0__["GraphQLServer"]({
  typeDefs,
  resolvers,
  context: {
    nomics: new _nomicsConnector__WEBPACK_IMPORTED_MODULE_1__["default"](NOMICS_API_KEY)
  }
}); // Go to http://localhost:4000 to test the API

server.start(() => console.log('Server running on http://localhost:4000'));

/***/ }),

/***/ "./src/nomicsConnector.js":
/*!********************************!*\
  !*** ./src/nomicsConnector.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoizee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoizee */ "memoizee");
/* harmony import */ var memoizee__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_1__);



class NomicsConnector {
  constructor(apiKey) {
    this.client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: 'https://api.nomics.com/v1',
      method: 'get',
      responseType: 'json',
      params: {
        key: apiKey
      }
    }); // this.getPricesByCurrencyCached = memoize(this.getPricesByCurrency, {
    // 	maxAge: 300000, // 5 minutes til cache expiration
    // 	preFetch: 0.05, // pre-fetch 15s before expiration
    // 	promise: 'then', // handle async
    // });

    this.getCoinInfoCached = memoizee__WEBPACK_IMPORTED_MODULE_1___default()(this.getCoinInfo, {
      maxAge: 300000,
      // 5 minutes til cache expiration
      preFetch: 0.05,
      // pre-fetch 15s before expiration
      promise: 'then' // handle async

    });
  } // async getPrices() {
  // 	const res = await this.client('/prices');
  // 	return res.data;
  // }
  // async getPricesByCurrency() {
  // 	const prices = await this.getPrices();
  // 	return prices.reduce((pricesByCurrency, { currency, price }) => {
  // 		pricesByCurrency[currency] = price;
  // 		return pricesByCurrency;
  // 	}, {});
  // }


  async getCoinInfo(currency) {
    const res = await this.client('/currencies/ticker', {
      params: {
        ids: currency
      }
    });
    return res.data;
  } // async getPrice(currency) {
  // 	const pricesByCurrency = await this.getPricesByCurrencyCached();
  // 	return pricesByCurrency[currency];
  // }


}

/* harmony default export */ __webpack_exports__["default"] = (NomicsConnector);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thoma\Documents\GitHub\crypto-portfolio-tracker\price-api\src/index.js */"./src/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-yoga":
/*!*******************************!*\
  !*** external "graphql-yoga" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-yoga");

/***/ }),

/***/ "memoizee":
/*!***************************!*\
  !*** external "memoizee" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("memoizee");

/***/ })

/******/ });
//# sourceMappingURL=main.map