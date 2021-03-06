/* eslint-disable no-new-wrappers */
/* eslint-disable no-sequences */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/*! MagicMouse.js - v1.1
 * A lightweight javascript library to create some amazing effects for the mouse (cursor) on your website
 * https://github.com/dshongphuc/magic-mouse-js
 * Copyright (c) 2020 Phuc H. <dshongphuc@gmail.com> under MIT license; */
export function magicMouse(e) {
  if (!Modernizr.touchevents) {
    if (
      (((e = e || {}).outerWidth = e.outerWidth || 30),
      (e.outerHeight = e.outerHeight || 30),
      (e.cursorOuter = e.cursorOuter || 'circle-basic'),
      (e.hoverEffect = e.hoverEffect || 'circle-move'),
      (e.hoverItemMove = e.hoverItemMove || !1),
      (e.defaultCursor = e.defaultCursor || !1),
      'disable' != e.cursorOuter)
    ) {
      var t = document.createElement('div');
      t.setAttribute('id', 'magicMouseCursor'), document.body.appendChild(t);
      var o = document.getElementById('magicMouseCursor');
    }
    if (!e.defaultCursor) {
      document.body.style.cursor = 'none';
      var s = document.createElement('div');
      s.setAttribute('id', 'magicPointer'), document.body.appendChild(s);
      var r = document.getElementById('magicPointer');
    }
    if (o) {
      (o.style.width = e.outerWidth + 'px'),
        (o.style.height = e.outerHeight + 'px');
      var n = e.outerWidth,
        i = e.outerHeight,
        a = e.outerWidth,
        c = e.outerHeight;
    }
    var l = 0,
      d = 0,
      u = 0,
      f = 0,
      h = !1;
    document.addEventListener('mousemove', function (e) {
      (u = e.clientX),
        (f = e.clientY),
        setTimeout(() => {
          h || ((l = e.clientX - n / 2), (d = e.clientY - i / 2));
        }, 50);
    }),
      document.querySelectorAll('.magic-hover').forEach((t, o) => {
        t.addEventListener('mouseenter', o => {
          switch (e.hoverEffect) {
            case 'circle-move':
              v(t), e.hoverItemMove && b(o, t);
              break;
            case 'pointer-blur':
              y(t, 'pointer-blur');
              break;
            case 'pointer-overlay':
              y(t, 'pointer-overlay');
          }
        }),
          t.addEventListener('mouseleave', o => {
            switch (e.hoverEffect) {
              case 'circle-move':
                p();
                break;
              case 'pointer-blur':
                g('pointer-blur');
                break;
              case 'pointer-overlay':
                g('pointer-overlay');
            }
          });
      }),
      document.querySelectorAll('.no-cursor').forEach((e, t) => {
        e.addEventListener('mouseenter', e => {
          (o.style.opacity = 0),
            (r.style.opacity = 0),
            (document.body.style.cursor = 'auto');
        }),
          e.addEventListener('mouseleave', e => {
            (o.style.opacity = 1),
              (r.style.opacity = 1),
              (document.body.style.cursor = 'none');
          });
      });
    var m = () => {
      o &&
        ((o.style.transform = 'matrix(1, 0, 0, 1, ' + l + ', ' + d + ')'),
        (o.style.width = n + 'px'),
        (o.style.height = i + 'px')),
        r &&
          (r.style.transform =
            'matrix(1, 0, 0, 1, ' +
            u +
            ', ' +
            f +
            ') translate3d(-50%, -50%, 0)'),
        requestAnimationFrame(m);
    };
    requestAnimationFrame(m);
    const v = e => {
        if (((h = !0), o)) {
          (o.style.transition =
            'transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s'),
            o.classList.add('is-hover');
          var t = event.currentTarget.getBoundingClientRect();
          e.classList.contains('magic-hover__square')
            ? (o.classList.add('cursor-square'),
              (l = t.left),
              (d = t.top),
              (n = t.width),
              (i = t.height))
            : ((l = t.left), (d = t.top), (n = t.width), (i = t.height));
        }
        r && r.classList.add('is-hover');
      },
      p = () => {
        (h = !1),
          o &&
            ((n = a),
            (i = c),
            (o.style.transition =
              'transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s'),
            o.classList.remove('cursor-square'),
            o.classList.remove('is-hover')),
          r && r.classList.remove('is-hover');
      },
      y = (e, t) => {
        r && r.classList.add(t);
      },
      g = e => {
        r && r.classList.remove(e);
      },
      b = (e, t) => {
        e.clientX,
          e.clientY,
          t.addEventListener('mousemove', e => {
            t.style.transform =
              'matrix(1,0,0,1,' +
              (e.offsetX - e.target.offsetWidth / 2) / 2 +
              ', ' +
              (e.offsetY - e.target.offsetHeight / 2) / 2 +
              ')';
          });
      };
  }
}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/ !(function (
  e,
  t,
  o
) {
  function s(e, t) {
    return typeof e === t;
  }
  function r() {
    return 'function' != typeof t.createElement
      ? t.createElement(arguments[0])
      : f
      ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function n() {
    var e = t.body;
    return e || ((e = r(f ? 'svg' : 'body')).fake = !0), e;
  }
  var i = [],
    a = [],
    c = {
      _version: '3.6.0',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var o = this;
        setTimeout(function () {
          t(o[e]);
        }, 0);
      },
      addTest: function (e, t, o) {
        a.push({ name: e, fn: t, options: o });
      },
      addAsyncTest: function (e) {
        a.push({ name: null, fn: e });
      },
    },
    l = function () {};
  (l.prototype = c), (l = new l());
  var d = c._config.usePrefixes
    ? ' -webkit- -moz- -o- -ms- '.split(' ')
    : ['', ''];
  c._prefixes = d;
  var u = t.documentElement,
    f = 'svg' === u.nodeName.toLowerCase(),
    h = (c.testStyles = function (e, o, s, i) {
      var a,
        c,
        l,
        d,
        f = 'modernizr',
        h = r('div'),
        m = n();
      if (parseInt(s, 10))
        for (; s--; )
          ((l = r('div')).id = i ? i[s] : f + (s + 1)), h.appendChild(l);
      return (
        ((a = r('style')).type = 'text/css'),
        (a.id = 's' + f),
        (m.fake ? m : h).appendChild(a),
        m.appendChild(h),
        a.styleSheet
          ? (a.styleSheet.cssText = e)
          : a.appendChild(t.createTextNode(e)),
        (h.id = f),
        m.fake &&
          ((m.style.background = ''),
          (m.style.overflow = 'hidden'),
          (d = u.style.overflow),
          (u.style.overflow = 'hidden'),
          u.appendChild(m)),
        (c = o(h, e)),
        m.fake
          ? (m.parentNode.removeChild(m),
            (u.style.overflow = d),
            u.offsetHeight)
          : h.parentNode.removeChild(h),
        !!c
      );
    });
  l.addTest('touchevents', function () {
    var o;
    if ('ontouchstart' in e || (e.DocumentTouch && t instanceof DocumentTouch))
      o = !0;
    else {
      var s = [
        '@media (',
        d.join('touch-enabled),('),
        'heartz',
        ')',
        '{#modernizr{top:9px;position:absolute}}',
      ].join('');
      h(s, function (e) {
        o = 9 === e.offsetTop;
      });
    }
    return o;
  }),
    (function () {
      var e, t, o, r, n, c;
      for (var d in a)
        if (a.hasOwnProperty(d)) {
          if (
            ((e = []),
            (t = a[d]).name &&
              (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
          )
            for (o = 0; o < t.options.aliases.length; o++)
              e.push(t.options.aliases[o].toLowerCase());
          for (
            r = s(t.fn, 'function') ? t.fn() : t.fn, n = 0;
            n < e.length;
            n++
          )
            1 === (c = e[n].split('.')).length
              ? (l[c[0]] = r)
              : (!l[c[0]] ||
                  l[c[0]] instanceof Boolean ||
                  (l[c[0]] = new Boolean(l[c[0]])),
                (l[c[0]][c[1]] = r)),
              i.push((r ? '' : 'no-') + c.join('-'));
        }
    })(),
    (function (e) {
      var t = u.className,
        o = l._config.classPrefix || '';
      if ((f && (t = t.baseVal), l._config.enableJSClass)) {
        var s = new RegExp('(^|\\s)' + o + 'no-js(\\s|$)');
        t = t.replace(s, '$1' + o + 'js$2');
      }
      l._config.enableClasses &&
        ((t += ' ' + o + e.join(' ' + o)),
        f ? (u.className.baseVal = t) : (u.className = t));
    })(i),
    delete c.addTest,
    delete c.addAsyncTest;
  for (var m = 0; m < l._q.length; m++) l._q[m]();
  e.Modernizr = l;
})(window, document);
