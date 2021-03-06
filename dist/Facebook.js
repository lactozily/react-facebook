'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Method = exports.LoginStatus = exports.InitStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InitStatus = exports.InitStatus = (0, _keymirror2.default)({
  LOADING: null,
  SUCCESS: null,
  TIMEOUT: null
});

var LoginStatus = exports.LoginStatus = (0, _keymirror2.default)({
  AUTHORIZED: null,
  UNAUTHORIZED: null,
  GUEST: null
});

var Method = exports.Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete'
};

function _api(path, method, params, callback) {
  if (typeof params === 'function') {
    return _api(path, method, {}, params);
  }

  if (typeof method === 'function') {
    return _api(path, 'get', {}, method);
  }

  var FB = window.FB;
  if (!FB) {
    callback(new Error('FB is not initialized'));
    return undefined;
  }

  return FB.api(path, method, params, callback);
}

var Facebook = function () {
  function Facebook() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Facebook);

    this.domain = options.domain || 'connect.facebook.net';
    this._appID = options.appID || null;
    this._version = options.version || 'v2.5';
    this._cookie = options.cookie || false;
    this._status = options.status || false;
    this._xfbml = options.xfbml || false;
    this._language = options.language || 'en_US';
    this._frictionlessRequests = options.frictionlessRequests || false;

    this._loaded = false;
    this._initialized = false;

    this._callbacks = [];

    if (options.init !== false) {
      this._loadScript();
    }
  }

  _createClass(Facebook, [{
    key: '_loadScript',
    value: function _loadScript() {
      var _this = this;

      if (!this._appID) {
        throw new Error('Facebook app id is not defined');
      }

      if (this._loaded) {
        throw new Error('FB script is already added to the DOM');
      }

      this._loaded = true;

      window.fbAsyncInit = function () {
        return _this._initFB();
      };

      var fjs = document.getElementsByTagName('script')[0];
      if (document.getElementById('facebook-jssdk')) {
        return;
      }

      var js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = '//' + this.domain + '/' + this._language + '/sdk.js';

      fjs.parentNode.insertBefore(js, fjs);
    }
  }, {
    key: '_initFB',
    value: function _initFB() {
      var _this2 = this;

      window.FB.init({
        appId: this._appID,
        version: this._version,
        cookie: this._cookie,
        status: this._status,
        xfbml: this._xfbml,
        frictionlessRequests: this._frictionlessRequests
      });

      this._initialized = true;

      // call callbacks
      this._callbacks.forEach(function (callback) {
        return _this2.whenReady(callback);
      });
      this._callbacks = [];
    }
  }, {
    key: 'whenReady',
    value: function whenReady(callback) {
      if (!this._loaded) {
        this._loadScript();
      }

      if (!this._initialized) {
        this._callbacks.push(callback);
      } else {
        callback(null, this);
      }

      return this;
    }
  }, {
    key: 'callCallbackByResponse',
    value: function callCallbackByResponse(cb, response) {
      if (!response) {
        cb(new Error('Response is undefined'));
        return;
      }

      cb(null, response);
    }
  }, {
    key: 'login',
    value: function login(opts, callback) {
      if (typeof opts === 'function') {
        this.login(null, opts);
        return;
      }

      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.login(function (response) {
          if (response.status === 'connected') {
            callback(null, LoginStatus.AUTHORIZED, response);
          } else if (response.status === 'not_authorized') {
            callback(null, LoginStatus.UNAUTHORIZED, response);
          } else {
            callback(null, LoginStatus.GUEST, response);
          }
        }, opts);
      });
    }
  }, {
    key: 'getLoginStatus',
    value: function getLoginStatus(callback) {
      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.getLoginStatus(function (response) {
          if (response.status === 'connected') {
            callback(null, LoginStatus.AUTHORIZED, response);
          } else if (response.status === 'not_authorized') {
            callback(null, LoginStatus.UNAUTHORIZED, response);
          } else {
            callback(null, LoginStatus.GUEST, response);
          }
        });
      });
    }
  }, {
    key: 'getTokenDetail',
    value: function getTokenDetail(callback) {
      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        var authResponse = window.FB.getAuthResponse();
        if (!authResponse.accessToken) {
          callback(new Error('Token is undefined'));
          return;
        }

        callback(null, authResponse);
      });
    }
  }, {
    key: 'getTokenDetailWithProfile',
    value: function getTokenDetailWithProfile(params, callback) {
      var _this3 = this;

      if (typeof params === 'function') {
        this.getTokenDetailWithProfile({}, params);
        return;
      }

      this.getTokenDetail(function (err, tokenDetail) {
        if (err) {
          callback(err);
          return;
        }

        _this3.getProfile(params, function (err2, profile) {
          if (err2) {
            callback(err2);
            return;
          }

          callback(null, {
            tokenDetail: tokenDetail,
            profile: profile
          });
        });
      });
    }
  }, {
    key: 'getToken',
    value: function getToken(callback) {
      this.getTokenDetail(function (err, authResponse) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, authResponse.accessToken);
      });
    }
  }, {
    key: 'getUserID',
    value: function getUserID(callback) {
      this.getTokenDetail(function (err, authResponse) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, authResponse.userID);
      });
    }
  }, {
    key: 'sendInvite',
    value: function sendInvite(to, options, callback) {
      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.ui(_extends({
          to: to,
          method: 'apprequests'
        }, options), function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }, {
    key: 'api',
    value: function api(path, method, params, callback) {
      return _api(path, method, params, callback);
    }
  }, {
    key: 'postAction',
    value: function postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, noFeedStory, callback) {
      if (typeof noFeedStory === 'function') {
        this.postAction(ogNamespace, ogAction, ogObject, ogObjectUrl, false, noFeedStory);
        return;
      }

      var url = '/me/' + ogNamespace + ':' + ogAction + '?' + ogObject + '=' + encodeURIComponent(ogObjectUrl);

      if (noFeedStory === true) {
        url += '&no_feed_story=true';
      }

      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        _api(url, Method.POST, function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }, {
    key: 'getPermissions',
    value: function getPermissions(callback) {
      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        _api('/me/permissions', function (response) {
          if (!response || !response.data[0]) {
            callback(new Error('Response is undefined'));
            return;
          }

          var perms = response.data[0];
          callback(null, perms, response);
        });
      });
    }
  }, {
    key: 'hasPermissions',
    value: function hasPermissions(permissions, callback) {
      this.getPermissions(function (err, userPermissions) {
        if (err) {
          callback(err);
          return;
        }

        for (var index in permissions) {
          if (!permissions.hasOwnProperty(index)) {
            continue;
          }

          var permission = permissions[index];

          if (!userPermissions[permission]) {
            callback(null, false, userPermissions);
            return;
          }
        }

        callback(null, true, userPermissions);
      });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(what, callback) {
      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.Event.subscribe(what, function (href, widget) {
          callback(null, href, widget);
        });
      });
    }
  }, {
    key: 'parse',
    value: function parse(parentNode, callback) {
      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        if (typeof parentNode === 'undefined') {
          window.FB.XFBML.parse();
        } else {
          window.FB.XFBML.parse(parentNode);
        }

        callback(null);
      });
    }
  }, {
    key: 'getProfile',
    value: function getProfile(params, callback) {
      if (typeof params === 'function') {
        this.getProfile({}, params);
        return;
      }

      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        _api('/me', Method.GET, params, function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }, {
    key: 'getRequests',
    value: function getRequests(callback) {
      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        _api('/me/apprequests', function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }, {
    key: 'removeRequest',
    value: function removeRequest(requestID, callback) {
      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        _api(requestID, Method.DELETE, function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }, {
    key: 'setAutoGrow',
    value: function setAutoGrow(callback) {
      this.whenReady(function (err) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.Canvas.setAutoGrow();
        callback(null);
      });
    }
  }, {
    key: 'paySimple',
    value: function paySimple(productUrl, quantity, callback) {
      if (typeof quantity === 'function') {
        this.paySimple(productUrl, 1, quantity);
        return;
      }

      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.ui({
          method: 'pay',
          action: 'purchaseitem',
          product: productUrl,
          quantity: quantity || 1 }, function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }, {
    key: 'pay',
    value: function pay(productUrl, options, callback) {
      this.whenReady(function (err, facebook) {
        if (err) {
          callback(err);
          return;
        }

        window.FB.ui(_extends({
          method: 'pay',
          action: 'purchaseitem',
          product: productUrl
        }, options), function (response) {
          facebook.callCallbackByResponse(callback, response);
        });
      });
    }
  }]);

  return Facebook;
}();

/*
  sendToFriends: function(options, callback) {
    if(!options) {
      options = {};
    }

    options.method = 'send';

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendMessage: function(message, name, caption, description, url, imgUrl, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        method: 'stream.publish',
        message: message,
        attachment: {
          name: name,
          caption: caption,
          description: description,
          href: url,
          media:[{
            type: 'image',
            src:  imgUrl,
            href: url
          }]
        },
        action_links: [{
          text: 'Code',
          href: url
        }],
        user_prompt_message: message
      },
      function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  sendInviteForm: function(options, callback) {
    if(typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method = options.method || 'apprequests';


      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  checkPageLike: function(pageID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      fbApi.getUserID(function(err, userID) {
        if(err) {
          return callback(err);
        }

        var fqlQuery = 'SELECT uid FROM page_fan WHERE page_id = ' + pageID + ' and uid =  '+ userID;
        var query = FB.Data.query(fqlQuery);

        query.wait(function(rows) {
          if (rows.length === 1 && rows[0].uid === userID) {
            callback(null, true, query);
          }
          else {
            callback(null, false, query);
          }
        });
      });
    });
  },

  sendMessageToFriend: function (friendID, link, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.ui({
        to: friendID,
        method: 'send',
        link: link
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  _prepareUsers: function(data) {
    var users=[];

    for(var index in data) {
      var userData=data[index];

      var user = {
        provider_uid: 'facebook'+'_'+userData.uid,
        provider: 'facebook',
        id: userData.uid,
        name: userData.name,
        first_name: userData.first_name,
        last_name: userData.last_name,
        status: (userData.status!==null) ? userData.status : null,
        image: '//graph.facebook.com/'+userData.uid+'/picture?'
      };

      users.push(user);
    }

    return users;
  },

  getUserList: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('fql', { q: 'SELECT uid, name, first_name, last_name, online_presence, status FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY name' }, function (response)
      {
        var users = fbApi._prepareUsers(response.data);
        callback(null, users, response);
      });
    });
  },

  postFeed: function(options, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      options.method='feed';

      FB.ui(options, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  createAlbum: function(name, description, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', 'post', {
        name: name,
        description: description
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //need publish_stream
  addImageToAlbum: function(albumID, imageURL, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', 'post', {
        message: message,
        url: imageURL
      }, function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbums: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/albums', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumPhotos: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/photos', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'user_photos'
  getAlbumCoverPicture: function(albumID, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/'+albumID+'/picture', function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  //'publish_stream'
  postPhoto: function(photoUrl, message, callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.api('/me/photos', 'post', {
        message: message,
        url: photoUrl
      },function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  },

  getPageInfo: function(callback) {
    this.afterLoad(function(err, fbApi) {
      if(err) {
        return callback(err);
      }

      FB.Canvas.getPageInfo(function(response) {
        fbApi._callCallbackByResponse(callback, response);
      });
    });
  }
*/


exports.default = Facebook;