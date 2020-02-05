webpackJsonp([1,4],{

/***/ 1551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(45);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ArtistDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistDetail, _Component);

  function ArtistDetail() {
    _classCallCheck(this, ArtistDetail);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistDetail).apply(this, arguments));
  }

  _createClass(ArtistDetail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.findArtist(this.props.params.id);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.params.id !== this.props.params.id) {
        this.props.findArtist(nextProps.params.id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.resetArtist();
    }
  }, {
    key: "onDeleteClick",
    value: function onDeleteClick() {
      this.props.deleteArtist(this.props.params.id);
    }
  }, {
    key: "renderAlbums",
    value: function renderAlbums() {
      var albums = this.props.artist.albums;

      if (!albums || !albums.map) {
        return;
      }

      return albums.map(function (album) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "card album",
          key: album.title
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "card-image"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: album.image
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "card-title"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, album.title))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "card-content"
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, album.copiesSold), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "copies sold")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, album.numberTracks), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "tracks"))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.artist) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, "Todo: implement \"FindArtist\" query");
      }

      var _this$props$artist = this.props.artist,
          name = _this$props$artist.name,
          age = _this$props$artist.age,
          genre = _this$props$artist.genre,
          image = _this$props$artist.image,
          yearsActive = _this$props$artist.yearsActive,
          netWorth = _this$props$artist.netWorth,
          labelName = _this$props$artist.labelName,
          _id = _this$props$artist._id;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "spacer"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], {
        to: "/"
      }, "Back"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], {
        to: "/artists/".concat(_id, "/edit")
      }, "Edit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: this.onDeleteClick.bind(this)
      }, "Delete")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "collection artist-detail"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "collection-item header"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, "Master of ", genre)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("image", {
        src: image,
        className: "right"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "collection-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, yearsActive), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "Years Active"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "collection-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, age), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "Years Old"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "collection-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, "$", netWorth), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "Net Worth"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "collection-item"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, labelName), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, "Label"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "flex wrap"
      }, this.renderAlbums())));
    }
  }]);

  return ArtistDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var artists = _ref.artists;
  return {
    artist: artists.artist
  };
};

/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_3__actions__)(ArtistDetail);

/***/ }

});