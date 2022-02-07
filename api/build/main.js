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

/***/ "./src/environment/environment.js":
/*!****************************************!*\
  !*** ./src/environment/environment.js ***!
  \****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
  production: false,
  nomicsApiKey: '656168ea65bbcbbd4b425c89446b2ed7',
  serviceAccountKey: {
    "type": "service_account",
    "project_id": "crypto-portfolio-tracker-app",
    "private_key_id": "eb4e325d2baded41d07381a54fa7e9be9f6ebd3e",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJtLDynEd0zXhf\nmXsmNYr+qb0l8c3XfHxN+txvXJm5X8yQy7oFAGcKLFE+/JIH8ocEL72fofd6QCM0\nGxsCzkIW4LnuWfkb0n0xWb72HMiA999dQmMlWrWMRuURAR5OsQwWaobTOi4iJQMh\nONO/Lln91BFQloRnV2oZsKzotABX6WYnhD9bkyW8ryKXEUl1d6OPRAeY5IZW0MRV\nwekEqYBut6xuq/JUeLjoyLztSAcrtUBAAKsr6yq+szIZd+Vx56GWzjrWPW2ncaJ3\nTg6vWhBhrbanqNalxnFXyXdL3t0+Px4fognz8W1QodtjVeUkB3sg/SnX0fHvQlHM\nyIaTZAuvAgMBAAECggEAJ9GSawzqkqlJWedxFzrbTsk5MwwpF9rcvNXBwQfXQaWk\naugmCYU0xlnLQnnZJigoh3rgi5TTkUuTgmEmHdkTfjcMPJJSuItUfR003Ui0Z6qF\nMZvdPHNu1Lm5SgH3SAzk8GRsSQ7lQSVPst8SR5F5Hy8ftJxZe+JogTY3wXAvOzwL\nItMlLCEV5a8f41xrPT+ISJ+zhy+WPJ3ymHvoLeRow6stocRI02WFKay6mZVRInxs\nNJ4+deSKBgSvCeTegmchYYxB7p/rPsV68/brTFFUc1UiMH9P0OOQEpW0/6IxUGiO\nG77ATS24h0oi4s/8fwJekKvpulD0gkI+ok0sb5abuQKBgQC8M4jFORVWRrCHm3hH\nTfUu0pfSQM9eT/o5a8XTXLnzf/kd+hrDVvuH/JkhoCJ04ws2tL7xtHHZ72HcMQHO\ndHC7l4S/zViLRMmQZ+B5OSAWoBNK0wU2L+1mw/9Q7hpzmjNST9nLCBUhPN6sWO9R\nc6Y4ZqNQQtw5OUG9kkMonT+zSQKBgQC7UFGHV7uzclVWkvQqO6CdOJOKAzKziXI3\nULMNqw/VqdDq8Bfre9+YgYxgClptwHJYJs4uljoTMe+9azVNcoz+v/SeO9TROEM7\nAaTbzl0IxqQQ9h05BSiMYBgaCqT/m7Z+fVG0am6B+jw1GZ0Iph8q3uZIZ9Z1JLX6\nSZzsXllPNwKBgQCFq8S07/prsQGpD4+6dXBztTgIKegfgIalShrUKMQaYwa5d+6S\nV7GHwK2y6F4Qz0IjtPT6D8PdmtzS3CwAS0vWsaOj52HAaTcQzfbtotlbuI57Uq4c\n8qWXnBY3kSZQfXF+QSDbx/3aAbXWi8RPAelJnfzZAOQR8Mz0rHHu4uFfoQKBgEwI\nPC+90vjyDeXIXMfP0FBBKNI6nhf2UKBXZ3bC2viVp7HVpz/01jvnSf2p9i7akQ9r\nIQIUBJrKCFBQ9h/rwYOek0KvcqFCPzfyYOLAD0+CohIodJAyodTpJJ9ddsAyio8p\ne0LKePTViB7duLpMBBa4x6zYSVrffeaMfuALJCFdAoGAIE1kFBQCVoot+Rjw0JWC\ndPtlTGU0owbymCIB6WjUUMv1WShgKjIT9XUJsjk5JPQsfH+UAPMxLCsHA5Ith5/J\n6ea4zj03jePF7QM3hA6jkHEee1gY78hw5vy/09CcAm77sy3XEY5MCcURnWrrMb/P\np407zD//EJ8c7X687jJ/F9Y=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-gh1d3@crypto-portfolio-tracker-app.iam.gserviceaccount.com",
    "client_id": "113411591332208029990",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gh1d3%40crypto-portfolio-tracker-app.iam.gserviceaccount.com"
  }
};

/***/ }),

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
/* harmony import */ var cron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cron */ "cron");
/* harmony import */ var cron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment/environment */ "./src/environment/environment.js");
/* harmony import */ var _nomicsConnector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nomicsConnector */ "./src/nomicsConnector.js");





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
    nomics: new _nomicsConnector__WEBPACK_IMPORTED_MODULE_4__["default"](_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nomicsApiKey)
  }
}); // Initialize Firebase

firebase_admin__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp({
  credential: firebase_admin__WEBPACK_IMPORTED_MODULE_2___default.a.credential.cert(_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serviceAccountKey)
});
const db = firebase_admin__WEBPACK_IMPORTED_MODULE_2___default.a.firestore();
const nomics = new _nomicsConnector__WEBPACK_IMPORTED_MODULE_4__["default"](_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nomicsApiKey);

const updateCoins = async () => {
  const allCoins = await nomics.getTopCoins();
  const topCoins = allCoins.slice(0, 500);
  topCoins.forEach(async element => {
    await db.collection('coins').doc(element.id).set(element);
  });
  return console.log('coins updated!');
}; // Cron job to update the data every minute
// var job = new CronJob('* * * * *', () => {
//   console.log('Updating data...');
//   updateCoins();
// }, null, true, 'Europe/Copenhagen');
// job.start();
// Go to http://localhost:4000 to test the API


server.start(() => console.log('Server running on http://localhost:4000')); // updateCoins();

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
    // this.getCoinInfoCached(currency) = memoize(this.getCoinInfo(currency), {
    // 	maxAge: 300000, // 5 minutes til cache expiration
    // 	preFetch: 0.05, // pre-fetch 15s before expiration
    // 	promise: 'then', // handle async
    // });
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
  }

  async getAllCoins() {
    const res = await this.client('/currencies', {
      params: {
        attributes: 'id,name,logo_url'
      }
    });
    return res.data;
  }

  async getTopCoins() {
    const res = await this.client('/currencies/ticker', {
      params: {
        sort: 'rank',
        attributes: 'id,name,logo_url'
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

module.exports = __webpack_require__(/*! C:\Users\thoma\Documents\GitHub\crypto-portfolio-tracker\api\src/index.js */"./src/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cron":
/*!***********************!*\
  !*** external "cron" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cron");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

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