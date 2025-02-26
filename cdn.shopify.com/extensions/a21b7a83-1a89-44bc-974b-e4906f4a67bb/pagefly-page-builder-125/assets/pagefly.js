;
(function() {
    "use strict";
    var Z = Object.defineProperty;
    var K = (t, e, n) => e in t ? Z(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n;
    var b = (t, e, n) => (K(t, typeof e != "symbol" ? e + "" : e, n), n);
    async function DEPRECATED_handleFeaturedProductPrice() {
        const t = window.jQuery;
        !t || t('[data-pf-type="Shopify.FeaturedProduct"]').each((e, n) => {
            t(n).find(".product__variants select").on("change", r => {
                const o = t(r.target),
                    s = o.closest(".pf-feature-product__infos").find(".pf-fp-pr"),
                    c = o.find(":selected"),
                    d = c.data("regular"),
                    l = c.data("sale"),
                    u = c.data("image");
                let f = r.target;
                for (; f && f.nodeName !== "BODY" && !f.querySelector(".pf-c");) f = f.parentNode;
                l ? (s.addClass("pf-p-hs"), parseInt(l) !== parseInt(d) ? s.find(".pf-p-prr").removeClass("hide").html(l) : s.find(".pf-p-prr").addClass("hide"), s.find(".pf-p-prs").html(d)) : (s.find(".pf-p-prr").addClass("hide"), s.find(".pf-p-prs").html(d)), u && f.querySelector(".pf-feature-product__image img") && f.querySelector(".pf-feature-product__image img").setAttribute("src", u)
            })
        })
    }
    async function handleDEPRECATEDelements() {
        DEPRECATED_handleFeaturedProductPrice().catch(console.log)
    }
    class PageFlyHelperStore {
        constructor() {
            b(this, "cart", {});
            b(this, "_listeners", []);
            b(this, "lastATCResult", {});
            b(this, "autoCartUpdate", !0)
        }
        subscribe(e) {
            this._listeners.push(e)
        }
        unsubscribe(e) {
            this._listeners = this._listeners.filter(n => n !== e)
        }
        update(e) {
            this._listeners.forEach(n => n(e))
        }
        set(e, n) {
            this[e] = n, this.update()
        }
    }
    const defaultStyle = [],
        ShadesOfGrey = [{
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                saturation: 36
            }, {
                color: "#000000"
            }, {
                lightness: 40
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }, {
                weight: 1.2
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 21
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 29
            }, {
                weight: .2
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 18
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 19
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#000000"
            }, {
                lightness: 17
            }]
        }],
        SubtleGrayscale = [{
            featureType: "administrative",
            elementType: "all",
            stylers: [{
                saturation: "-100"
            }]
        }, {
            featureType: "administrative.province",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                lightness: 65
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                lightness: "50"
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "all",
            stylers: [{
                saturation: "-100"
            }]
        }, {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{
                visibility: "simplified"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "all",
            stylers: [{
                lightness: "30"
            }]
        }, {
            featureType: "road.local",
            elementType: "all",
            stylers: [{
                lightness: "40"
            }]
        }, {
            featureType: "transit",
            elementType: "all",
            stylers: [{
                saturation: -100
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                hue: "#ffff00"
            }, {
                lightness: -25
            }, {
                saturation: -97
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                lightness: -25
            }, {
                saturation: -100
            }]
        }],
        UltraLight = [{
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#e9e9e9"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                color: "#f5f5f5"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                color: "#ffffff"
            }, {
                lightness: 17
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#ffffff"
            }, {
                lightness: 29
            }, {
                weight: .2
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                color: "#ffffff"
            }, {
                lightness: 18
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                color: "#ffffff"
            }, {
                lightness: 16
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                color: "#f5f5f5"
            }, {
                lightness: 21
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#dedede"
            }, {
                lightness: 21
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#ffffff"
            }, {
                lightness: 16
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                saturation: 36
            }, {
                color: "#333333"
            }, {
                lightness: 40
            }]
        }, {
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#f2f2f2"
            }, {
                lightness: 19
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                color: "#fefefe"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#fefefe"
            }, {
                lightness: 17
            }, {
                weight: 1.2
            }]
        }],
        BrightColors = [{
            featureType: "all",
            elementType: "all",
            stylers: [{
                saturation: "32"
            }, {
                lightness: "-3"
            }, {
                visibility: "on"
            }, {
                weight: "1.18"
            }]
        }, {
            featureType: "administrative",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [{
                saturation: "-70"
            }, {
                lightness: "14"
            }]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
                saturation: "100"
            }, {
                lightness: "-14"
            }]
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }, {
                lightness: "12"
            }]
        }];
    var LIST_LAYOUT = (t => (t[t.GRID = 0] = "GRID", t[t.SLIDE = 1] = "SLIDE", t))(LIST_LAYOUT || {}),
        HOVER_ACTION = (t => (t[t.NONE = 0] = "NONE", t[t.MAGNIFIER = 1] = "MAGNIFIER", t[t.HOVER = 2] = "HOVER", t))(HOVER_ACTION || {}),
        ON_HOVER = (t => (t[t.NEXT_IMAGE = 0] = "NEXT_IMAGE", t[t.LAST_IMAGE = 1] = "LAST_IMAGE", t[t.RANDOM_IMAGE = 2] = "RANDOM_IMAGE", t[t.ALL_IMAGE = 3] = "ALL_IMAGE", t))(ON_HOVER || {}),
        CLICK_ACTION = (t => (t[t.NONE = 0] = "NONE", t[t.LINK_TO_PRODUCT = 1] = "LINK_TO_PRODUCT", t[t.SHOW_FULLSCREEN = 2] = "SHOW_FULLSCREEN", t))(CLICK_ACTION || {});
    const DEVICES_MAP = {
            laptop: {
                from: 1025,
                to: 1200
            },
            tablet: {
                from: 768,
                to: 1024
            },
            mobile: {
                from: 0,
                to: 767
            }
        },
        REGEX_CHECK_LAST_WORD_BEFORE_UNDERSCORE = /_(\d+)(?!.*_)/,
        DATE_FORMATS_METAFIELD = {
            "%m-%d-%Y": "MM-dd-yyyy",
            "%d-%m-%Y": "dd-MM-yyyy",
            "%Y-%m-%d": "yyyy-MM-dd",
            "%m/%d/%Y": "MM/dd/yyyy",
            "%d/%m/%Y": "dd/MM/yyyy",
            "%Y/%m/%d": "yyyy/MM/dd",
            "%B %e, %Y": "MMMM d, yyyy",
            "%e %B, %Y": "d MMMM, yyyy",
            "%d %b, %Y": "dd MMM, yyyy"
        },
        TIME_FORMATS_METAFIELD = {
            "%I:%M %p": "KK:mm a",
            "%H:%M": "HH:mm"
        },
        TYPE_METAFIELD = {
            COLOR_FIELD: "color",
            DATE_FIELD: "date",
            DATE_TIME_FIELD: "date_time",
            SINGLE_LINE_TEXT_FIELD: "single_line_text_field",
            MULTI_LINE_TEXT_FIELD: "multi_line_text_field",
            NUMBER_INTEGER_FIELD: "number_integer",
            NUMBER_DECIMAL_FIELD: "number_decimal",
            URL_FIELD: "url",
            DIMENSION_FIELD: "dimension",
            VOLUME_FIELD: "volume",
            WEIGHT_FIELD: "weight",
            RATING_FIELD: "rating",
            FILE_REFERENCE_FIELD: "file_reference",
            IMAGE_REFERENCE_FIELD: "image_reference",
            PAGE_REFERENCE_FIELD: "page_reference",
            PRODUCT_REFERENCE_FIELD: "product_reference",
            VARIANT_REFERENCE_FIELD: "variant_reference",
            LIST_COLOR_FIELD: "list.color",
            LIST_DATE_TIME_FIELD: "list.date_time",
            LIST_DATE_FIELD: "list.date",
            LIST_NUMBER_INTEGER_FIELD: "list.number_integer",
            LIST_NUMBER_DECIMAL_FIELD: "list.number_decimal",
            LIST_VARIANT_REFERENCE_FIELD: "list.variant_reference",
            LIST_PRODUCT_REFERENCE_FIELD: "list.product_reference",
            LIST_FILE_REFERENCE_FIELD: "list.file_reference",
            LIST_PAGE_REFERENCE_FIELD: "list.page_reference",
            LIST_IMAGE_REFERENCE_FIELD: "list.image_reference",
            LIST_META_OBJECT_FIELD: "list.metaobject_reference",
            LIST_WEIGHT_FIELD: "list.weight",
            LIST_VOLUME_FIELD: "list.volume",
            LIST_RATING_FIELD: "list.rating",
            LIST_DIMENSION_FIELD: "list.dimension",
            LIST_SINGLE_LINE_TEXT_FIELD: "list.single_line_text_field",
            LIST_URL_FIELD: "list.url",
            BOOLEAN_FIELD: "boolean",
            RICH_TEXT_FIELD: "rich_text_field",
            JSON_FIELD: "json",
            META_OBJECT_FIELD: "metaobject_reference",
            MONEY_FIELD: "money"
        },
        UNIT_MAPPING_METAFIELD = {
            MILLIMETERS: "mm",
            CENTIMETERS: "cm",
            METERS: "m",
            INCHES: "in",
            FEET: "ft",
            YARDS: "yd",
            MILLILITERS: "ml",
            CENTILITERS: "cl",
            LITERS: "l",
            CUBIC_METERS: "m\xB3",
            FLUID_OUNCES: "fl oz",
            PINTS: "pt",
            QUARTS: "qt",
            GALLONS: "gal",
            IMPERIAL_FLUID_OUNCES: "fl oz imp",
            IMPERIAL_PINTS: "pt imp",
            IMPERIAL_QUARTS: "qt imp",
            IMPERIAL_GALLONS: "gal imp",
            KILOGRAMS: "kg",
            GRAMS: "g",
            POUNDS: "lb",
            OUNCES: "oz",
            m3: "m\xB3",
            us_fl_oz: "fl oz",
            us_pt: "pt",
            us_qt: "qt",
            us_gal: "gal",
            imp_fl_oz: "fl oz imp",
            imp_pt: "pt imp",
            imp_qt: "qt imp",
            imp_gal: "gal imp"
        },
        VALUE_NOT_SATISFY_METAFIELD = [void 0, null],
        leftIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4508 13.6742C30.1831 14.4064 30.1831 15.5936 29.4508 16.3258L20.7766 25L29.4508 33.6742C30.1831 34.4064 30.1831 35.5936 29.4508 36.3258C28.7186 37.0581 27.5314 37.0581 26.7992 36.3258L16.7992 26.3258C16.0669 25.5936 16.0669 24.4064 16.7992 23.6742L26.7992 13.6742C27.5314 12.9419 28.7186 12.9419 29.4508 13.6742Z" fill="black"/>
    </svg>
  `,
        rightIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2992 36.3258C18.5669 35.5936 18.5669 34.4064 19.2992 33.6742L27.9733 25L19.2992 16.3258C18.5669 15.5936 18.5669 14.4064 19.2992 13.6742C20.0314 12.9419 21.2186 12.9419 21.9508 13.6742L31.9508 23.6742C32.6831 24.4064 32.6831 25.5936 31.9508 26.3258L21.9508 36.3258C21.2186 37.0581 20.0314 37.0581 19.2992 36.3258Z" fill="black"/>
    </svg>
  `,
        videoIcon = `
    <svg width='11' height='14' viewBox='0 0 11 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path 
          opacity='0.6' 
          d='M1.71795 0.719814C1.56631 0.627985 1.39299 0.578117 1.21573 0.57532C1.03847 0.572523 0.863662 0.616896 0.7092 0.703896C0.554738 0.790895 0.42618 0.917392 0.336696 1.07043C0.247212 1.22346 0.200019 1.39754 0.199951 1.57481V12.3108C0.199976 12.4926 0.249526 12.6708 0.343274 12.8265C0.437022 12.9822 0.571425 13.1094 0.732038 13.1945C0.89265 13.2795 1.0734 13.3191 1.25486 13.3092C1.43632 13.2992 1.61163 13.24 1.76195 13.1378L10.112 7.46081C10.2504 7.36662 10.363 7.23915 10.4394 7.09011C10.5158 6.94107 10.5536 6.77523 10.5492 6.6078C10.5448 6.44038 10.4985 6.27673 10.4144 6.13189C10.3303 5.98704 10.2112 5.86564 10.068 5.77881L1.71795 0.718814V0.719814Z'
          fill='black'
        />
    </svg>
  `,
        modelIcon = `
      <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.6'
          d='M14.1301 3.27971L9.00008 0.319707C8.69604 0.144171 8.35115 0.0517578 8.00008 0.0517578C7.649 0.0517578 7.30411 0.144171 7.00008 0.319707L1.88008 3.31971C1.5719 3.49759 1.31675 3.75447 1.14097 4.06385C0.965185 4.37323 0.875124 4.72391 0.880077 5.07971V10.9997C0.875124 11.3555 0.965185 11.7062 1.14097 12.0156C1.31675 12.3249 1.5719 12.5818 1.88008 12.7597L7.00008 15.7597C7.30411 15.9352 7.649 16.0277 8.00008 16.0277C8.35115 16.0277 8.69604 15.9352 9.00008 15.7597L14.1201 12.7597C14.4283 12.5818 14.6834 12.3249 14.8592 12.0156C15.035 11.7062 15.125 11.3555 15.1201 10.9997V4.99971C15.119 4.65165 15.0271 4.30991 14.8535 4.00825C14.6798 3.7066 14.4305 3.45547 14.1301 3.27971ZM7.73008 14.3797L2.61008 11.3797C2.54095 11.34 2.48167 11.2852 2.43666 11.2194C2.39164 11.1536 2.36205 11.0785 2.35008 10.9997V4.99971C2.3504 4.90601 2.37556 4.81407 2.42299 4.73327C2.47042 4.65246 2.53843 4.58567 2.62008 4.53971L7.74008 1.53971C7.82065 1.49319 7.91204 1.4687 8.00508 1.4687C8.09811 1.4687 8.18951 1.49319 8.27008 1.53971L13.3901 4.53971L8.67008 7.21971C8.45972 7.33976 8.28614 7.51498 8.16806 7.72646C8.04999 7.93793 7.9919 8.17764 8.00008 8.41971V14.4197C7.91475 14.4413 7.8254 14.4413 7.74008 14.4197L7.73008 14.3797Z'
          fill='black'
        />
      </svg>
      `,
        ATC_PF_ANALYTICS_ID = "__pf_analytics_orderitem_id",
        pageflyProducts = window.__pageflyProducts || {},
        pageflyProductCollections = window.__pagefly_product_collections || {},
        OUTSIDE_BOX_KEY = "outside",
        __pagefly_product_store__ = window.__pagefly_product_store__ = new PageFlyHelperStore,
        __pagefly_helper_store__$1 = window.__pagefly_helper_store__ = new PageFlyHelperStore,
        MapStyles = {
            default: defaultStyle,
            ShadesOfGrey,
            UltraLight,
            SubtleGrayscale,
            BrightColors
        },
        modalDataCss = ".pf-m{display:none;top:50%;left:50%;transform:translate(-50%,-50%);max-height:min(calc(9/16*100vw), calc(100% - 6px - 2em));-webkit-overflow-scrolling:touch;overflow:hidden;background:0 0;border:none;margin:0;padding:0;flex-direction:column;align-items:flex-end}.pf-m::backdrop{background:rgba(0,0,0,.9);opacity:1}.pf-m iframe{border:0;}.pf-m>img{max-width:90vw;max-height:90vh;vertical-align:middle}.pf-close-btn{height:16px;background:none;border:none;margin-bottom:8px;padding:0;cursor:pointer}.pf-close-btn:focus-visible{box-shadow:none;}svg{pointer-events:none}",
        STARTED_VERSION_USING_THEME_APP_EXTENSION = "3.0.0",
        getDevice = () => {
            const {
                innerWidth: t
            } = window;
            return Object.keys(DEVICES_MAP).find(e => {
                const {
                    from: n,
                    to: a
                } = DEVICES_MAP[e];
                return t >= n && t <= a
            }) || "all"
        },
        getElemIdByClassname = t => t ? t.split(" ").find(e => e.match(/pf-(\d)+_|pf-(\w+)-(\d)+_/)) : null;

    function debounce$1(t, e, n = !1) {
        let a;
        return function() {
            const r = this,
                o = arguments,
                i = function() {
                    a = null, n || t.apply(r, o)
                },
                s = n && !a;
            clearTimeout(a), a = setTimeout(i, e), s && t.apply(r, o)
        }
    }
    async function getHttpRequest(t) {
        return new Promise((e, n) => {
            const a = new XMLHttpRequest;
            a.open("GET", t, !0), a.onload = () => a.status === 200 ? e(a.response) : n(Error(a.statusText)), a.onerror = r => n(Error(`Network Error: ${r}`)), a.send()
        })
    }
    const initZoomImage = t => {
            const e = t.querySelector("img"),
                n = e.src;
            if (!n) return;
            const a = {
                    width: e.width,
                    height: e.height
                },
                r = document.createElement("div");
            r.className = "zoom-image", r.style.cssText = `
		background: url('${n}') no-repeat center/contain;
		z-index: 1;
		width: ${e.width}px;
		height: ${e.height}px;
		position: absolute;
		top: 0;
	`, !!t.querySelector("div.zoom-image") || t.insertBefore(r, t.firstElementChild.nextSibling), t.addEventListener("mouseenter", function() {
                e.style.display = "none", r.style.backgroundSize = "150%", r.style.width = "100%", r.style.height = "100%"
            }), t.addEventListener("mousemove", function(i) {
                const s = this.getBoundingClientRect(),
                    c = i.clientX - s.left,
                    d = i.clientY - s.top,
                    l = Math.round(100 / (s.width / c)),
                    u = Math.round(100 / (s.height / d));
                r.style.backgroundPosition = `${l}% ${u}%`
            }), t.addEventListener("mouseleave", function() {
                t.querySelector("div.zoom-image").style.display !== "none" && (e.style.display = "inline"), r.style.backgroundSize = "contain", r.style.backgroundPosition = "center", r.style.width = `${a.width}px`, r.style.height = `${a.height}px`
            })
        },
        initZoomImage2 = t => {
            const e = t.querySelector("img"),
                n = e.parentElement;
            n.addEventListener("mouseenter", function() {
                e.style.opacity = 0, n.style.backgroundImage = `url("${e.currentSrc}")`, n.style.backgroundRepeat = "no-repeat", n.style.backgroundSize = "200%"
            }), n.addEventListener("mousemove", function(a) {
                var d, l;
                let r, o;
                const i = a.currentTarget;
                a.offsetX ? r = a.offsetX : r = (d = a.touches) == null ? void 0 : d[0].pageX, a.offsetY ? o = a.offsetY : r = (l = a.touches) == null ? void 0 : l[0].pageX;
                const s = r / i.offsetWidth * 100,
                    c = o / i.offsetHeight * 100;
                i.style.backgroundPosition = `${s}% ${c}%`
            }), n.addEventListener("mouseleave", function() {
                e.style.opacity = 1, n.style.backgroundImage = ""
            })
        },
        getMobileOS = () => {
            const t = navigator.userAgent;
            return /android/i.test(t) ? "Android" : /iPad|iPhone|iPod/.test(t) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 ? "iOS" : "Other"
        },
        checkARCompatible = t => {
            if (t === "Android") return "xr" in window.navigator;
            if (t === "iOS") {
                let e = !1;
                return document.createElement("a").relList.supports("ar") && (e = !0), e
            }
            return !1
        };

    function getPageTypeFromPFPageSetting() {
        var t;
        return pfPageSetting.pageType || ((t = window.__pagefly_setting__) == null ? void 0 : t.pageType)
    }
    const TIMER_OUT = 1500,
        timeoutPromise = (t = TIMER_OUT) => new Promise(e => {
            setTimeout(e, t)
        }),
        isTrackingActive = () => {
            var t, e, n;
            return (((t = window.__pagefly_analytics_settings__) == null ? void 0 : t.acceptNewTracking) || ((e = window.__pagefly_analytics_settings__) == null ? void 0 : e.acceptTracking)) && !window.location.href.includes("preview?id=") && (typeof((n = window.Shopify.customerPrivacy) == null ? void 0 : n.userCanBeTracked) == "function" ? window.Shopify.customerPrivacy.userCanBeTracked() : !0)
        },
        truncateText = (t, e, n) => {
            if (!e) return t;
            const a = "[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B",
                r = new RegExp(a),
                o = !!t.match(r);
            let i = t,
                s = t.replace(/<[^>]*>/g, " ").trim();
            if (o) {
                const d = new RegExp(`(${a})`, "g");
                i = i.replace(d, " $1"), s = s.replace(d, " $1")
            }
            s = s.match(/\S+/g);
            let c = [];
            if (s && s.length > e) {
                const d = i.replace(/</g, " <").replace(/>/g, "> ").split(/\s/);
                let l = 0;
                for (let f = 0; f < d.length && !(l === e || !s.length); f++) {
                    let h = d[f];
                    const v = h.replace(/<[^>]*>/g, "").replace(/^[^>]*>/g, "").replace(/<[^>]*$/g, "");
                    if (s[0] === v) {
                        const y = s.splice(0, 1)[0];
                        !v.match(/^&[a-z0-9]+;$/i) && (v.length > 1 || v.match(/[a-z0-9]/i) || v.match(r)) && !["", " ", "`", "-", "=", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "\\", ";", "'", ",", ".", "/", "{", "}", "|", ":", '"', "<", ">", "?"].includes(v) && (l++, n && l === e && (h = h.replace(y, `${y}&hellip;`)))
                    }
                    c.push(h)
                }
                c = c.join(" ").replace(/ </g, "<").replace(/> /g, ">"), o && (c = c.replace(new RegExp(` (${a})`, "g"), "$1"));
                const u = c.match(/<[^>]*>/g);
                if (u) {
                    const f = [];
                    u.forEach(h => {
                        if (h.match(/\/>$/) || h.match(/<br\s*(((\w|[.-])+="[^"]*"\s*|\s+(\w)*))*\/?>/)) return;
                        let v = h.match(/^<([a-z0-9\-_]+)/i);
                        if (v) return f.push(v[1].toLowerCase());
                        if (v = h.match(/^<\/([a-z0-9\-_]+)>/i), v && v[1].toLowerCase() === f[f.length - 1]) return f.pop()
                    }), f.length && f.reverse().forEach(h => {
                        c += `</${h}>`
                    })
                }
                return c
            }
            return t
        },
        textToJsonUseVal = inputText => {
            try {
                const jsonString = `{"data": ${inputText}}`,
                    jsonObject = eval(`(${jsonString})`);
                return jsonObject.data
            } catch (t) {
                return console.error("===> Error textToJsonUseVal:", t), null
            }
        };

    function hideElementIfNotFound(t, e) {
        const n = t.length,
            a = e.length;
        if (n > a)
            for (let r = a; r < n; r++) t[r].style.visibility = "hidden", t[r].style.height = "0", t[r].style.overflow = "hidden";
        if (a === n)
            for (let r = 0; r < n; r++) t[r].style.visibility = t[r].style.visibility || "visible", t[r].style.height = e[r].style.height || "unset", t[r].style.overflow = t[r].style.overflow || "auto"
    }

    function collectionHas(t, e) {
        for (let n = 0; n < t.length; n++)
            if (t[n] === e) return !0;
        return !1
    }

    function findParentBySelector(t, e) {
        const n = document.querySelectorAll(e);
        let a = t.parentNode;
        for (; a && !collectionHas(n, a);) a = a.parentNode;
        return a
    }

    function getOriginalSrc(t) {
        if (!t.includes("https://cdn.shopify.com") || !t.includes("&resized")) return t;
        const e = t.slice(0, t.lastIndexOf("_")),
            n = t.split(".")[t.split(".").length - 1];
        return `${e}.${n}`
    }

    function getPFHelperVersion(t) {
        try {
            const e = /^https:\/\/(cdn|apps|wip|rc)\.pagefly\.io\/assets\/pagefly\/assets\/[^\/]+\/helper\.js.*$/,
                n = /^https:\/\/(cdn|apps|wip|rc)\.pagefly\.io\/pagefly\/[^\/]+\/core\/helper\.js.*$/;
            if (e.test(t)) {
                const a = t.split("/");
                return a[a.length - 2]
            } else if (n.test(t)) {
                const a = t.split("/");
                return a[a.length - 3]
            } else return null
        } catch (e) {
            console.error("Get PF helper version", e)
        }
    }

    function comparePFHelperVersion(t, e) {
        try {
            const n = t.split("."),
                a = e.split(".");
            return n[0] == a[0] ? n[1] == a[1] ? parseInt(n[2]) - parseInt(a[2]) : parseInt(n[1]) - parseInt(a[1]) : parseInt(n[0]) - parseInt(a[0])
        } catch (n) {
            console.error("Compare version helper", n)
        }
    }
    const pfSetting = window.__pagefly_setting__ || {
            baseURL: "https://apps.pagefly.io",
            cdnURL: "https://cdn.pagefly.io"
        },
        pfPageSetting = window.__pagefly_page_setting__ || {};
    pfSetting.elementData;
    window.__pagefly__ = window.__pagefly__ || {};
    const getFrontEndSettings = t => {
            var a;
            const e = getElemIdByClassname(t.className);
            return (((a = window.__pagefly_setting__) == null ? void 0 : a.elementData) || {})[e]
        },
        pageflyLivePageRedirect = t => {
            var a;
            const e = (a = window.Shopify) == null ? void 0 : a.designMode,
                n = e ? window.location : window.top.location;
            console.log("PageFly:: redirect data:", {
                url: t,
                isInShopifyThemeEditor: e
            }), n.href = t
        };
    window.__pagefly__.pageflyLivePageRedirect = pageflyLivePageRedirect;
    const appProxyUrl = "/apps/pagefly";

    function getDefaultRequestConfig() {
        return JSON.parse(JSON.stringify({
            credentials: "same-origin",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json;"
            }
        }))
    }

    function fetchJSON(t, e) {
        return fetch(t, e).then(n => n.json())
    }

    function getCart() {
        return fetchJSON("/cart.js", getDefaultRequestConfig())
    }

    function cartAddFromForm(t) {
        var n, a;
        const e = getDefaultRequestConfig();
        return delete e.headers["Content-Type"], e.method = "POST", e.body = t, fetchJSON((a = (n = window.Shopify) == null ? void 0 : n.routes) != null && a.root ? `${window.Shopify.routes.root}cart/add.js` : "/cart/add.js", e)
    }
    async function createOrderItem(t) {
        try {
            const e = await fetch(`${appProxyUrl}/order-item/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            });
            if (!e.ok) throw new Error("Bad response :<");
            const n = await e.json();
            if (!n.success) throw new Error(n.message)
        } catch (e) {
            console.error(e instanceof Error ? e.message : e)
        }
    }
    async function onCreateOrderItem(t) {
        var l;
        const {
            shouldTrackOrder: e,
            pfPageInfo: n,
            atcId: a,
            data: r,
            generatedId: o,
            product: i,
            pageType: s,
            pageId: c,
            collectionsOfProduct: d
        } = t;
        try {
            let u = o;
            if (!e || !n) return;
            const f = await getCart();
            if (!f) return;
            const {
                items: h
            } = f, v = h.find(I => I.id === a && !!I.properties[ATC_PF_ANALYTICS_ID]);
            v && (r[`properties[${ATC_PF_ANALYTICS_ID}]`] = u = v.properties[ATC_PF_ANALYTICS_ID]);
            const {
                pf_page_name: y,
                pf_page_subject_id: p
            } = n, S = (l = window.__pagefly_setting__) == null ? void 0 : l.shopDomain, T = {
                _id: u,
                shopDomain: S,
                properties: {}
            };
            if (i) {
                const {
                    featured_image: I,
                    title: w
                } = i, C = {
                    pageType: s,
                    pageId: c,
                    pageName: y,
                    pageSubjectId: p,
                    productPageImage: I,
                    productName: w
                };
                Object.assign(T.properties, C)
            }
            if (d && d instanceof Array) {
                const I = [];
                d.forEach(w => {
                    const {
                        id: C,
                        title: O,
                        image: k
                    } = w, q = k == null ? void 0 : k.src;
                    I.push({
                        collectionId: C,
                        collectionTitle: O,
                        collectionImageSrc: q
                    })
                }), Object.assign(T.properties, {
                    collectionsOfProduct: I
                })
            }
            await createOrderItem(T)
        } catch (u) {
            console.log(u instanceof Error ? u.message : u)
        }
    }
    const GROUPTHOUGHT_THEME = ["pipeline", "story"],
        handleGroupThoughtThemes = async () => {
            var t, e, n, a;
            window.theme && ((e = (t = window.theme) == null ? void 0 : t.info) == null ? void 0 : e.name) && GROUPTHOUGHT_THEME.includes((a = (n = window.theme) == null ? void 0 : n.info) == null ? void 0 : a.name) && handleGroupThoughtThemePartner().catch(console.error)
        },
        handleGroupThoughtThemePartner = async () => {
            var e;
            const t = await window.getCart();
            document.dispatchEvent(new CustomEvent("theme:cart:change", {
                detail: {
                    cart: t
                }
            })), (e = document.querySelector('[data-drawer="drawer-cart"]')) == null || e.dispatchEvent(new CustomEvent("theme:drawer:open"))
        };

    function handlePixelUnionThemes(t) {
        switch (!0) {
            case /Editions/i.test(t):
                handleThemeEditions();
                break;
            case /Empire/i.test(t):
                handleThemeEmpire();
                break;
            case /Handy/i.test(t):
                break;
            case /Pacific/i.test(t):
                handleThemePacific();
                break;
            case /Startup/i.test(t):
                handleThemeStartup();
                break;
            case /Atlantic/i.test(t):
                break;
            case /Launch/i.test(t):
                handleThemeLaunch();
                break;
            case /Reach/i.test(t):
                handleThemeReach();
                break;
            case /Grid/i.test(t):
                break;
            case /Vogue/i.test(t):
                handleThemeVogue();
                break
        }
    }
    const handleThemeEditions = () => {
            window.Shopify.getCart(t => {
                const e = document.querySelector("[data-header-cart-count]");
                e && (e.innerHTML = `(${t.item_count})`)
            })
        },
        handleThemeEmpire = () => {
            fetch("/cart.json").then(t => t.json()).then(t => {
                const e = new CustomEvent("cartcount:update", {
                    detail: t
                });
                window.dispatchEvent(e)
            })
        },
        handleThemePacific = () => {
            window.Shopify.getCart(t => {
                window.$(".cart-item-count").html(t.item_count), window.$(".header-tools-cart").addClass("cart-has-content")
            })
        },
        handleThemeStartup = () => {
            window.Shopify.getCart(t => {
                document.dispatchEvent(new CustomEvent("cart:count", {
                    detail: {
                        count: t.item_count
                    }
                }))
            })
        },
        handleThemeLaunch = () => {
            window.Shopify.getCart(t => {
                document.querySelectorAll(".cart-link .cart-count").forEach(e => e.innerHTML = t.item_count), document.querySelectorAll(".header-cart-count").forEach(e => e.classList.add("active"))
            })
        },
        handleThemeReach = () => {
            window.Shopify.getCart(t => {
                document.querySelectorAll("[data-cart-count]").forEach(e => e.innerHTML = t.item_count)
            })
        },
        handleThemeVogue = () => {
            window.Shopify.getCart(t => {
                document.querySelectorAll("[data-cart-count]").forEach(e => e.innerHTML = t.item_count)
            })
        },
        RED_PLUG_DESIGN_THEME = ["Avenue"],
        handleRedPlugDesignThemes = async () => {
            var t, e;
            window.themeInfo && ((t = window.themeInfo) == null ? void 0 : t.name) && RED_PLUG_DESIGN_THEME.includes((e = window.themeInfo) == null ? void 0 : e.name) && handleRedPlugDesignTheme().catch(console.error)
        },
        handleRedPlugDesignTheme = async () => {
            typeof window.CartDrop == "function" && window.CartDrop(!1)
        };

    function handleRoarTheme(t) {
        var n;
        const {
            lastATCResult: e
        } = __pagefly_helper_store__$1;
        (n = window.Fastor) != null && n.setupCartPopup ? handleThemeFastor(e) : /BeYours/i.test(t) && handleThemeBeYours(e)
    }

    function handleThemeFastor(t) {
        window.Fastor.setupCartPopup(t)
    }

    function handleThemeBeYours(t) {
        document.querySelector("mini-cart").renderContents(t)
    }

    function handleStudioZashTheme(t) {
        switch (!0) {
            case /Cindy/i.test(t):
            case /Carla/i.test(t):
            case /Claudia/i.test(t):
                handleThemeOfStudioZash();
                break
        }
    }
    const handleThemeOfStudioZash = () => {
        const {
            lastATCResult: t
        } = __pagefly_helper_store__$1, e = document.querySelector("cart-notification");
        e.setActiveElement(document.activeElement), e.renderContents(t)
    };
    let IDX = 36,
        HEX = "";
    for (; IDX--;) HEX += IDX.toString(36);

    function uid(t) {
        let e = "",
            n = t || 11;
        for (; n--;) e += HEX[Math.random() * 36 | 0];
        return e
    }
    let SIZE = 4096,
        HEX2 = [],
        IDX2 = 0,
        BUFFER;
    for (; IDX2 < 256; IDX2++) HEX2[IDX2] = (IDX2 + 256).toString(16).substring(1);

    function uuid() {
        (!BUFFER || IDX2 + 16 > SIZE) && (BUFFER = crypto.getRandomValues(new Uint8Array(SIZE)), IDX2 = 0);
        let t = 0,
            e, n = "";
        for (; t < 16; t++) e = BUFFER[t + IDX2], t == 6 ? n += HEX2[e & 15 | 64] : t == 8 ? n += HEX2[e & 63 | 128] : n += HEX2[e], t & 1 && t > 1 && t < 11 && (n += "-");
        return IDX2++, n
    }
    const validationRegex = /^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-4[A-Za-z0-9]{3}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/,
        validateUUID = t => typeof t == "string" && validationRegex.test(t);
    window.uniqueId = {
        uid,
        uuid,
        validateUUID
    };

    function formcheck(t) {
        console.log("validating...", t);
        const e = window._pagefly_form_fields_selector || '[name][required]:not([hidden]):not([type="file"]):not([type="hidden"])',
            n = t.querySelectorAll(e),
            a = [];
        return n.forEach((r, o) => {
            if (r.required && !["hidden", "file"].includes(r.type))
                if (r.type === "radio") {
                    let i = !1;
                    const s = r.name;
                    t.querySelectorAll(`input[name="${s}"]`).forEach((c, d) => {
                        c.value && (i = !0)
                    }), i || a.push(r)
                } else r.value || a.push(r)
        }), a
    }

    function checkLanguage() {
        const t = __pagefly_helper_store__$1.cart;
        return t.attributes && t.attributes.ml_lang || window.Shopify.locale
    }

    function toFormData(t) {
        let e = new FormData;
        return typeof e._asNative == "function" && (e = e._asNative().fd), Object.entries(t).forEach(([n, a]) => {
            e.append(n, a)
        }), e
    }
    const handleTimberTheme = async () => {
            const t = await window.getCart();
            window.ajaxCart.cartUpdateCallback(t)
        },
        handleBlumTheme = t => {
            typeof window.SHTHelper.forceUpdateCartStatus == "function" && window.SHTHelper.forceUpdateCartStatus(t)
        };

    function ajaxCartUpdate(t) {
        var e, n, a;
        try {
            __pagefly_helper_store__$1.cart && (__pagefly_helper_store__$1.lastATCResult = t, __pagefly_helper_store__$1.update(t));
            const {
                lastATCResult: r,
                autoCartUpdate: o
            } = __pagefly_helper_store__$1;
            if (o && r && ((n = (e = window.Shopify) == null ? void 0 : e.theme) == null ? void 0 : n.name)) {
                const i = window.__pagefly_theme_atc_check__ || window.Shopify.theme.name;
                handlePixelUnionThemes(i), handleGroupThoughtThemes(), handleRedPlugDesignThemes(), handleRoarTheme(i), handleStudioZashTheme(i), handleBlumTheme(t), window.timber && ((a = window.ajaxCart) == null ? void 0 : a.cartUpdateCallback) && handleTimberTheme().catch(console.error)
            }
        } catch (r) {
            console.warn(r)
        }
    }

    function customDataForTheme() {
        var e, n;
        const t = window.__pagefly_theme_atc_check__ || ((n = (e = window == null ? void 0 : window.Shopify) == null ? void 0 : e.theme) == null ? void 0 : n.name);
        switch (!0) {
            case /Cindy|Carla|Claudia/i.test(t):
                return {
                    sections: "cart-notification-product,cart-notification-button,cart-icon-bubble"
                };
            case /BeYours/i.test(t):
                return {
                    sections: "cart-icon-bubble,mini-cart"
                };
            default:
                return {}
        }
    }
    async function handleShopifyProductATC() {
        DEPRECATED_addToCartHelper().catch(console.log);
        const t = [...document.querySelectorAll('[data-pf-type="ProductATC"]'), ...document.querySelectorAll('[data-pf-type="ProductATC2"]')];
        if (t.length) try {
            fetch("/cart.json").then(r => {
                r.json().then(function(o) {
                    __pagefly_helper_store__$1.cart = o
                })
            }).catch(function(r) {
                console.warn(r)
            })
        } catch (r) {
            console.warn(r)
        }
        document.querySelectorAll('[data-pf-type="ProductText"][data-product-type="compare_at_price"]').forEach((r, o) => {
            const i = r.getAttribute("data-product-id");
            pageflyProducts[i] && (pageflyProducts[i].comparePrices = pageflyProducts[i].comparePrices || [], pageflyProducts[i].comparePrices.push(r))
        });
        const n = document.createElement("p");
        n.style.color = "red", n.style.marginTop = "15px";
        const a = isTrackingActive() && !window.ReCharge;
        t.forEach(r => {
            const o = r.closest("form"),
                i = getFrontEndSettings(r),
                {
                    iconPos: s = "left"
                } = i || {},
                c = r.querySelectorAll('[data-pf-type="Icon"],[data-pf-type="Icon2"]');
            r.addEventListener("click", async d => {
                var M, F, R, B;
                d.preventDefault(), d.stopPropagation();
                const l = d.currentTarget,
                    u = pfPageSetting.pageId || pfSetting.pageId,
                    f = pfPageSetting.pageType || pfSetting.pageType,
                    h = l.getAttribute("data-checkout"),
                    v = l.getAttribute("data-checkout-link"),
                    y = l.getAttribute("data-product-id"),
                    p = l.getAttribute("data-adding"),
                    S = l.getAttribute("data-added"),
                    T = pageflyProducts[y],
                    I = pageflyProductCollections[y],
                    w = l.closest('[data-pf-type="ProductBox"]'),
                    C = w && w.className;
                if (!T) return;
                let O;
                const k = T.pfCurrentVariant && T.pfCurrentVariant[getElemIdByClassname(C) || OUTSIDE_BOX_KEY];
                if (k && k.id ? O = k.id : l.getAttribute("data-current-variant") ? O = l.getAttribute("data-current-variant") : O = ((M = T.selected_or_first_available_variant) == null ? void 0 : M.id) || ((F = T == null ? void 0 : T.variants[0]) == null ? void 0 : F.id), !O) return console.warn("Variant have no product!");
                if (o) {
                    if (o.querySelector(".pplr-wrapper")) {
                        if (!o.checkValidity()) o.reportValidity();
                        else return o.submit();
                        return
                    }
                    if ((B = (R = window.shopstorm) == null ? void 0 : R.apps) != null && B.productCustomizer) try {
                        if (o.querySelector(".product-customizer-options") && o.querySelector('input[type="file"]')) {
                            window.shopstorm.apps.productCustomizer.addOptionPricingItemToCart(y);
                            const H = document.createElement("input");
                            if (H.type = "hidden", H.name = "id", H.value = O, o.appendChild(H), !o.checkValidity()) o.reportValidity();
                            else return o.submit()
                        }
                    } catch (H) {
                        console.warn(H)
                    }
                    if (o.querySelector('[data-pf-type="InfiniteProductOption"]') && !(window.validate_options && await window.validate_options(y))) return;
                    const W = o.querySelector('[data-pf-type="InfiniteOptionsShopPad"]');
                    if (W && W.querySelector('[data-uploadery-valid="false"]') || "__pf_formcheck_callback" in window && typeof window.__pf_formcheck_callback == "function" && !window.__pf_formcheck_callback(o)) return;
                    if (!o.checkValidity()) {
                        o.reportValidity();
                        return
                    }
                    const V = formcheck(o);
                    if (V.length > 0) {
                        console.warn("missing field", V);
                        const H = document.createElement("a");
                        H.style.color = "#dc3545", H.textContent = "Please fill all the required fields(*) before Add To Cart!", l.insertAfter(H), setTimeout(() => H.remove(), 3e3);
                        return
                    }
                }
                const q = w ? w.querySelector('[data-pf-type="ProductQuantity"] input') : T.quantityArr && T.quantityArr.get(OUTSIDE_BOX_KEY) && T.quantityArr.get(OUTSIDE_BOX_KEY)[0].querySelector("input"),
                    D = q && q.value || 1;
                let _, L = {};
                L = customDataForTheme(), window.__getPFCustomATCData && typeof window.__getPFCustomATCData == "function" && (L = window.__getPFCustomATCData(y));
                const A = {
                        quantity: D,
                        id: O,
                        ...L
                    },
                    x = window.pfPageInfo,
                    m = uuid();
                if (isTrackingActive()) {
                    const N = await getCart(),
                        {
                            items: Y
                        } = N,
                        W = Y.find(V => V.id === O && !!V.properties[ATC_PF_ANALYTICS_ID]);
                    W ? A[`properties[${ATC_PF_ANALYTICS_ID}]`] = W.properties[ATC_PF_ANALYTICS_ID] : A[`properties[${ATC_PF_ANALYTICS_ID}]`] = m
                }
                if (o) {
                    _ = new FormData(o), typeof _._asNative == "function" && (_ = _._asNative().fd);
                    const N = o.querySelector('[name="id"]'),
                        Y = N && N.value;
                    Number(Y) || _.append("id", O), Object.entries(L).forEach(([W, V]) => {
                        _.append(W, V)
                    }), x && a && A[`properties[${ATC_PF_ANALYTICS_ID}]`] && _.append(`properties[${ATC_PF_ANALYTICS_ID}]`, A[`properties[${ATC_PF_ANALYTICS_ID}]`])
                } else _ = toFormData(A);
                const g = l.textContent,
                    E = l.children;
                l.dataset.pfType === "ProductATC" ? Array.from(E).forEach(N => N.style.display = "none") : l.dataset.pfType === "ProductATC2" && (l.textContent = "");
                const P = document.createElement("span");
                if (P.textContent = p, l.append(P), c && c.forEach(N => {
                        s === "left" ? r.prepend(N) : r.append(N)
                    }), l.setAttribute("disabled", "true"), isTrackingActive()) {
                    const N = "add_to_cart";
                    if (typeof window < "u") {
                        if (!window.gtag) return;
                        window.gtag("event", "pf_add_to_cart", Object.assign({
                            pf_add_to_cart: sessionStorage.getItem(N) ? 0 : 1,
                            send_to: "pagefly",
                            pf_product_id: O,
                            pf_event: "add_to_cart",
                            event_callback: () => {
                                sessionStorage.setItem(N, "true")
                            }
                        }, window.pfPageInfo))
                    }
                }
                return cartAddFromForm(_).then(async N => {
                    console.log("PF ATC Result: ", N);
                    const {
                        status: Y,
                        description: W
                    } = N;
                    if (Y >= 422) l.parentElement.append(n), n.textContent = `* ${W}`;
                    else {
                        P.textContent = S;
                        const V = {
                                shouldTrackOrder: a,
                                pfPageInfo: x,
                                atcId: O,
                                data: N,
                                generatedId: m,
                                product: T,
                                pageType: f,
                                pageId: u,
                                collectionsOfProduct: I
                            },
                            H = new Promise(async X => {
                                await onCreateOrderItem(V), X("Created order item")
                            });
                        switch (await Promise.race([H, timeoutPromise()]), console.info("After ATC action: ", h), h) {
                            default:
                                case "same":
                                ajaxCartUpdate(N);
                            break;
                            case "cart":
                                    console.log("checkout..."),
                                pageflyLivePageRedirect("/cart");
                                break;
                            case "checkout":
                                    console.log("checkout...");
                                const X = checkLanguage();pageflyLivePageRedirect(`/checkout${X?`?locale=${X}`:""}`);
                                break;
                            case "link":
                                    pageflyLivePageRedirect(v);
                                break
                        }
                    }
                    if (setTimeout(() => {
                            P.remove(), l.dataset.pfType === "ProductATC" ? Array.from(E).forEach(V => V.style.display = "inline-block") : l.dataset.pfType === "ProductATC2" && (l.textContent = g), c && c.forEach(V => {
                                s === "left" ? r.prepend(V) : r.append(V)
                            }), l.removeAttribute("disabled"), n.remove()
                        }, Y < 300 ? 1e3 : 1500), !(Y >= 422)) return N
                }).catch(N => {
                    throw new Error(N)
                })
            })
        })
    }
    async function DEPRECATED_addToCartHelper() {
        const t = window.jQuery;
        if (!t) return;
        t('a[data-action="AddToCart"]').length && getCart().then(n => {
            __pagefly_helper_store__$1.cart = n
        }), t(document).click(n => {
            var a, r, o, i;
            if (n.target.getAttribute("data-action") === "AddToCart") {
                const s = t(n.target);
                n.preventDefault(), n.stopPropagation();
                const c = s.data("text"),
                    d = s.data("checkout"),
                    l = s.siblings('[name="quantity"]'),
                    u = l.length ? l.eq(0).val() : 1,
                    f = s.data("variation");
                let h;
                h = s.find("span").data("variant"), (f || !h) && (h = s.closest("form").find("select").val());
                const v = {
                    quantity: u,
                    id: h
                };
                s.addClass("is-loading");
                const y = s.children().eq(0);
                y.addClass("pfa pfa-spinner pfa-spin"), y.text(""), t.ajax({
                    type: "POST",
                    url: (r = (a = window.Shopify) == null ? void 0 : a.routes) != null && r.root ? `${(i=(o=window.Shopify)==null?void 0:o.routes)==null?void 0:i.root}cart/add.js` : "/cart/add.js",
                    dataType: "text json",
                    data: v,
                    error: p => {
                        if (p.status === 422) {
                            const S = JSON.parse(p.responseText);
                            s.html(`<p>${S.description}</p>`)
                        }
                    },
                    success: p => {
                        y.removeClass("pfa pfa-spinner pfa-spin"), s.removeClass("is-loading"), s.addClass("is-added"), y.text("Added"), ajaxCartUpdate(p), d ? (async () => {
                            const S = checkLanguage();
                            window.open(`${window.location.origin}/checkout${S?`?locale=${S}`:""}`, "_self")
                        })() : setTimeout(() => {
                            y.text(c), s.removeClass("is-added")
                        }, 2e3)
                    }
                })
            }
        })
    }

    function updateATCTextButtonOnChangeVariant(t, e, n) {
        var a;
        if (t && (n == null ? void 0 : n.available)) {
            t.removeAttribute("disabled");
            const r = getElemIdByClassname(t.className),
                o = e.get(r);
            if (!t.querySelector("span")) t.innerHTML = o;
            else {
                const i = new DOMParser().parseFromString(`<div>${o}</div>`, "text/xml"),
                    s = ((a = i == null ? void 0 : i.firstElementChild) == null ? void 0 : a.querySelector('[data-pf-type="Text"]')) || (i == null ? void 0 : i.firstElementChild),
                    c = s ? s.innerHTML.trim().replace("/>", "></i>") : "Add to Cart";
                t.querySelector("span").innerHTML = c
            }
        } else if (t) {
            t.setAttribute("disabled", "true");
            const r = window.__pf_unavailable_text || "Unavailable",
                o = n ? t.getAttribute("data-soldout") || "Sold Out" : r;
            t.querySelector("span") ? t.querySelector("span").innerHTML = o : t.innerHTML = `<span>${o}</span>`
        }
    }
    async function storeSomeProductElements() {
        const t = document.querySelectorAll('[data-product-type="price"]'),
            e = document.querySelectorAll('[data-product-type="compare_at_price"]'),
            n = [...document.querySelectorAll('[data-pf-type="ProductATC2"]'), ...document.querySelectorAll('[data-pf-type="ProductATC"]')],
            a = document.querySelectorAll('[data-pf-type="ProductMedia"]'),
            r = document.querySelectorAll('[data-pf-type="ProductMedia2"]');
        storeElsInProductByType(t, "price"), storeElsInProductByType(e, "comparePrice"), storeElsInProductByType(n, "atc"), storeElsInProductByType(a, "media"), storeElsInProductByType(r, "media2")
    }

    function storeElemInProductByType(t, e) {
        const n = t.getAttribute("data-product-id"),
            a = pageflyProducts[n];
        if (!a) return;
        const r = `${e}Arr`;
        a[r] = a[r] || new Map;
        const o = t.closest('[data-pf-type="ProductBox"]');
        if (o) {
            const i = a[r].get(getElemIdByClassname(o.className)) || [];
            i.push(t), a[r].set(getElemIdByClassname(o.className), i)
        } else {
            const i = a[r].get(OUTSIDE_BOX_KEY) || [];
            i.push(t), a[r].set(OUTSIDE_BOX_KEY, i)
        }
        if (e === "atc") {
            const {
                atcContents: i = new Map
            } = a, s = getElemIdByClassname(t.className);
            if (!i.get(s)) {
                const {
                    innerHTML: c
                } = t;
                i.set(s, c), a.atcContents = i
            }
        }
    }

    function storeInstanceInProductByType(t, e) {
        const n = t.pId,
            a = pageflyProducts[n];
        if (!a) return;
        const r = `${e}Instances`,
            o = t.boxId || OUTSIDE_BOX_KEY;
        a[r] = a[r] || new Map;
        const i = a[r].get(o) || [];
        i.push(t), a[r].set(o, i)
    }
    async function storeElsInProductByType(t, e) {
        t.forEach(n => {
            storeElemInProductByType(n, e)
        })
    }
    async function handleShopifyProductBadge() {
        document.querySelectorAll('[data-pf-type="ProductBadge"]').forEach((e, n) => {
            storeElemInProductByType(e, "badge");
            const a = e.getAttribute("data-product-id"),
                r = pageflyProducts[a],
                o = getFrontEndSettings(e);
            isValidCondition(a, o) && e.removeAttribute("hidden"), updateProductBadgeByVariant([e], r == null ? void 0 : r.selected_or_first_available_variant), updateProductBadgeByVariant([e], r == null ? void 0 : r.selected_or_first_available_variant) && (e.style.display = "none")
        })
    }

    function isValidCondition(t, e) {
        const {
            applyCondition: n = !1,
            tags: a = [],
            collectionSource: r = "",
            collectionIds: o = []
        } = e;
        if (!n) return !0;
        const i = pageflyProducts[t].tags,
            s = (a == null ? void 0 : a.split(",").map(f => f.trim().toLowerCase()).filter(f => f !== "")) || [],
            c = window.__pagefly_product_collections[t].map(f => `${f.id}`),
            d = !!i.some(f => s.includes(f.toLowerCase())),
            l = r === "custom" && !!o.filter(f => c.includes(f)).length,
            u = r === "all" && c.length === window.__pagefly_collections_count;
        return d || l || u
    }

    function updateProductBadgeByVariant(t, e) {
        let n = !1;
        t && e && (a(), n = r()), t != null && t.length && (t[0].style.display = n ? "none" : "block");

        function a() {
            const i = (window.__pagefly_variant_stock || {})[e.id];
            if (typeof i == "number") {
                const s = t[0].querySelector("[data-badge-type='stock']");
                s && (s.textContent = i)
            }
        }

        function r() {
            const {
                price: o,
                compare_at_price: i
            } = e;
            let s = 0;
            const c = parseFloat(o || "0"),
                d = parseFloat(i || "0");
            d > c && d !== 0 && (s = 100 - Math.round(c / d * 100));
            const l = t[0].querySelectorAll("[data-badge-type='discount']");
            return l.length && s === 0 ? !0 : (l.forEach(u => {
                u.textContent = s > 0 ? `${s}` : ""
            }), !1)
        }
        return n
    }
    async function handleProductCollectionDescription() {
        const t = document.querySelectorAll('[data-pf-type="ProductDescription"][data-product-type="content"]:not([data-loaded-des="true"])'),
            e = document.querySelectorAll('[data-pf-type="CollectionDescription"][data-collection-type="description"]:not([data-loaded-des="true"])'),
            n = document.querySelectorAll('[data-pf-type="ArticleExcerpt"]:not([data-loaded-des="true"])'),
            a = r => {
                const o = r.getAttribute("data-compact");
                r.getAttribute("data-loaded-des") || r.setAttribute("data-loaded-des", "true");
                const s = /<meta charset="utf-8"[^>]*>|(<style>((.|\s)*?)<\/style>)|(<script((.|\s)*?)<\/script>)/g,
                    c = r.innerHTML.replace(s, "");
                if (o) {
                    const d = r.getAttribute("data-show-button");
                    let l = truncateText(c, parseInt(o), d !== "false");
                    if (l.length < c.length) {
                        r.setAttribute("data-collapse", "true");
                        let u = r.getAttribute("data-more");
                        u = u && u.trim() || "More";
                        let f = r.getAttribute("data-less");
                        f = f && f.trim() || "Less", d !== "false" && (l = `${l} <a href="#" class="pf-read-more">${u.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</a>`), r.innerHTML = l, d !== "false" && (r.onmousedown = function(h) {
                            const y = h.target.closest(".pf-read-more");
                            y && (y.onclick = function(p) {
                                p.preventDefault(), r.getAttribute("data-collapse") === "true" ? (r.innerHTML = c.concat(` <a href="#" class="pf-read-more">${f.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</a>`), r.setAttribute("data-collapse", "false")) : (r.innerHTML = l, r.setAttribute("data-collapse", "true"))
                            })
                        })
                    } else r.innerHTML = c
                } else r.innerHTML = c
            };
        Array.from(t).forEach(r => a(r)), Array.from(e).forEach(r => a(r)), Array.from(n).forEach(r => a(r))
    }
    const videoTypes = {
            youtube: "https://www.youtube.com/embed/",
            vimeo: "https://player.vimeo.com/video/"
        },
        loadExternalVideo = (t, e, n) => {
            const a = videoTypes[e] + n,
                r = t.querySelector("iframe");
            if (r) r.setAttribute("src", a), r.classList.remove("pf-hidden");
            else {
                const o = document.createElement("iframe");
                o.src = a, o.style.border = "none", o.classList.add("featured-media"), t.prepend(o)
            }
        },
        loadVideo = (t, e) => {
            const n = t.querySelector("video");
            if (n) n.setAttribute("src", e), n.removeAttribute("poster"), n.classList.remove("pf-hidden");
            else {
                const a = document.createElement("video");
                a.src = e, a.setAttribute("controls", ""), a.classList.add("featured-media"), t.prepend(a)
            }
        },
        loadModelViewer = (t, e, n, a) => {
            const r = t.querySelector("model-viewer");
            if (r) r.setAttribute("poster", n), r.setAttribute("src", e), r.setAttribute("alt", a), r.classList.remove("pf-hidden");
            else {
                const o = document.createElement("model-viewer");
                o.loading = "eager", o.setAttribute("camera-controls", ""), o.setAttribute("poster", n), o.setAttribute("src", e), o.setAttribute("alt", a), o.classList.add("featured-media"), t.prepend(o)
            }
        },
        getVideoSrcOfHighestQuality = t => {
            let e = t[0];
            for (let n = 1; n < t.length; n++) t[n].format === t[0].format && t[n].height > e.height && (e = t[n]);
            return e.url
        },
        j = class {
            constructor(e, n, a = 0) {
                b(this, "isTouchDevice");
                b(this, "limit");
                b(this, "media");
                b(this, "images");
                b(this, "index");
                b(this, "activeIndex");
                b(this, "$GalleryEl");
                b(this, "$Items");
                b(this, "$master");
                b(this, "$masterImg");
                b(this, "$List");
                b(this, "$hint");
                b(this, "isZoom", !1);
                b(this, "transformState", {
                    scale: 1,
                    transX: 0,
                    transY: 0
                });
                b(this, "pointState", {
                    startX0: null,
                    startY0: null,
                    endX0: null,
                    endY0: null,
                    startX1: null,
                    startY1: null,
                    endX1: null,
                    endY1: null
                });
                b(this, "twoTouchesMoveTimeStamp", 0);
                b(this, "loaded", !1);
                this.getDevice(), this.media = [...e], this.index = a, this.$GalleryEl = document.createElement("div"), n.appendChild(this.$GalleryEl)
            }
            load() {
                this.loadCSS(), this.fillHtmlIntoContainer(), this.getElement(), this.initEvent(), this.loaded = !0
            }
            getDevice() {
                this.isTouchDevice = ["mobile", "tablet"].includes(getDevice()), this.isTouchDevice ? this.limit = 5 : this.limit = 10
            }
            fillHtmlIntoContainer() {
                this.$GalleryEl.classList.add("pf-gallery-container", "pf-gallery-hide");
                const e = this.media.map((n, a) => j.html.item(n.preview_image.src, a, n.media_type)).join("");
                this.$GalleryEl.innerHTML = j.html.container(this.media[0].preview_image.src, e, this.media.length)
            }
            getElement() {
                const {
                    selector: e
                } = j;
                this.$master = this.$GalleryEl.querySelector(e.master), this.$masterImg = this.$master.querySelector("img"), this.$List = this.$GalleryEl.querySelector(e.list), this.$Items = this.$List.querySelectorAll(e.item), this.$hint = this.$GalleryEl.querySelector(e.hint)
            }
            initEvent() {
                this.isTouchDevice ? (this.$masterImg.addEventListener("touchstart", this.touchStartHandler.bind(this), {
                    passive: !0
                }), this.$masterImg.addEventListener("touchmove", this.touchMoveHandler.bind(this)), this.$masterImg.addEventListener("touchend", this.touchEndHandler.bind(this)), this.$masterImg.addEventListener("click", this.touchEndHandler.bind(this)), this.handleSwipe()) : (this.$masterImg.addEventListener("mousedown", this.handleMouseDown.bind(this)), this.$masterImg.addEventListener("mouseup", this.handleMouseUp.bind(this))), this.$masterImg.addEventListener("load", this.onLoadedMasterImageHandler.bind(this)), this.$GalleryEl.addEventListener("click", this.handleClickEvent.bind(this))
            }
            handleMouseDown(e) {
                if (this.pointState.startX0 = e.pageX, this.pointState.startY0 = e.pageY, this.pointState.endX0 = e.pageX, this.pointState.endY0 = e.pageY, this.isZoom) {
                    const n = this.moveZoomedImageOnDesktopHandler.bind(this);
                    window.addEventListener("mousemove", n), window.addEventListener("mouseup", () => {
                        window.removeEventListener("mousemove", n)
                    })
                }
            }
            handleMouseUp(e) {
                this.pointState.endX0 === e.pageX && this.pointState.endY0 === e.pageY && this.toggleZoom()
            }
            moveZoomedImageOnDesktopHandler(e) {
                e.preventDefault(), this.updateStyleOnMovingZoomedImage({
                    pageX: e.pageX,
                    pageY: e.pageY
                })
            }
            touchStartHandler(e) {
                e.preventDefault(), e.touches.length === 1 && (this.pointState = { ...this.pointState,
                    startX0: e.touches[0].pageX,
                    startY0: e.touches[0].pageY
                }), e.touches.length === 2 && (this.pointState = { ...this.pointState,
                    startX0: e.touches[0].pageX,
                    startY0: e.touches[0].pageY,
                    startX1: e.touches[1].pageX,
                    startY1: e.touches[1].pageY
                })
            }
            touchMoveHandler(e) {
                e.preventDefault();
                const n = e.timeStamp - this.twoTouchesMoveTimeStamp < 300;
                e.touches.length === 1 && this.transformState.scale > 1 && !n && this.updateStyleOnMovingZoomedImage({
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                }), e.touches.length === 2 && (this.twoTouchesMoveTimeStamp = e.timeStamp, this.updateStyleOnPinchingZoomingImage({
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                }, {
                    pageX: e.touches[1].pageX,
                    pageY: e.touches[1].pageY
                }))
            }
            touchEndHandler(e) {
                this.pointState = null
            }
            updateStyleOnMovingZoomedImage(e) {
                const n = this.getTranslateRange(),
                    a = (e.pageX - this.pointState.startX0) / this.transformState.scale,
                    r = (e.pageY - this.pointState.startY0) / this.transformState.scale;
                let o = a + this.transformState.transX,
                    i = r + this.transformState.transY;
                Math.abs(o) > Math.abs(n.x) && (o = o > 0 ? n.x : -n.x), Math.abs(i) > Math.abs(n.y) && (i = i > 0 ? n.y : -n.y), this.$masterImg.style.transform = `scale(${this.transformState.scale}) translate(${o}px, ${i}px)`, this.transformState.transX = o, this.transformState.transY = i, this.pointState.startX0 = e.pageX, this.pointState.startY0 = e.pageY
            }
            updateStyleOnPinchingZoomingImage(e, n) {
                const a = this.getDistanceBetweenTwoPoints({
                        point0: {
                            x: this.pointState.startX0,
                            y: this.pointState.startY0
                        },
                        point1: {
                            x: this.pointState.startX1,
                            y: this.pointState.startY1
                        }
                    }),
                    r = this.getDistanceBetweenTwoPoints({
                        point0: {
                            x: e.pageX,
                            y: e.pageY
                        },
                        point1: {
                            x: n.pageX,
                            y: n.pageY
                        }
                    }),
                    o = Math.abs(r / a);
                let i = isNaN(o) ? this.transformState.scale : o * this.transformState.scale,
                    s = this.transformState.transX,
                    c = this.transformState.transY;
                i > 8 && (i = 8), i < 1 && (i = i < .25 ? .25 : i, s = 0, c = 0), this.$masterImg.style.transform = `scale(${i}) translate(${s}px, ${c}px)`, this.transformState = {
                    scale: i,
                    transX: s,
                    transY: c
                }, this.pointState = { ...this.pointState,
                    startX0: e.pageX,
                    startY0: e.pageY,
                    startX1: n.pageX,
                    startY1: n.pageY
                }
            }
            getDistanceBetweenTwoPoints(e) {
                const {
                    point0: n,
                    point1: a
                } = e, r = n.x - a.x, o = n.y - a.y;
                return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2))
            }
            getTranslateRange() {
                const {
                    offsetWidth: e,
                    offsetHeight: n
                } = this.$master, {
                    width: a,
                    height: r
                } = this.$masterImg;
                return {
                    x: Math.floor(Math.abs(a * this.transformState.scale - e) / (this.transformState.scale * 2)),
                    y: Math.floor(Math.abs(r * this.transformState.scale - n) / (this.transformState.scale * 2))
                }
            }
            turnOnZoom() {
                const {
                    desktopScale: e
                } = j;
                this.isZoom = !0, this.$master.style.width = "100%", this.$master.style.height = "100%", this.$masterImg.style.cursor = "move", this.$masterImg.style.transform = `scale(${e}) translate(0px, 0px)`, this.transformState = {
                    scale: e,
                    transX: 0,
                    transY: 0
                }
            }
            turnOffZoom() {
                this.$master.style.removeProperty("width"), this.$master.style.removeProperty("height"), this.$masterImg.style.cursor = "zoom-in", this.$masterImg.style.transform = "none", this.transformState = {
                    scale: 1,
                    transX: 0,
                    transY: 0
                }, this.isZoom = !1
            }
            toggleZoom() {
                this.isZoom ? this.turnOffZoom() : this.turnOnZoom()
            }
            show(e = -1) {
                this.loaded || this.load(), this.$GalleryEl.classList.remove("pf-gallery-hide"), document.querySelector("body").classList.add("pf-gallery-open"), e !== -1 && (this.setImage(e), this.scrollItemToView(e))
            }
            hide() {
                document.querySelector("body").classList.remove("pf-gallery-open"), this.$GalleryEl.classList.add("pf-gallery-hide"), this.turnOffZoom()
            }
            handleClickEvent(e) {
                const n = e.target;
                n.closest(j.selector.exit) ? this.hide() : n.closest(j.selector.left) ? this.setImage(this.index - 1) : n.closest(j.selector.right) ? this.setImage(this.index + 1) : n.closest(j.selector.item) && this.handleClickItem(n)
            }
            handleSelectMedia(e) {
                const n = this.$master.querySelector(".video-wrapper");
                switch (n.innerHTML = "", e.media_type) {
                    case "image":
                        n.style.removeProperty("display"), n.style.removeProperty("width");
                        break;
                    case "model":
                        const a = e.sources[0].url,
                            r = e.preview_image.src;
                        a && loadModelViewer(n, a, r, e.alt), n.style.display = "block";
                        break;
                    case "video":
                        const o = getVideoSrcOfHighestQuality(e.sources);
                        o && loadVideo(n, o), n.style.display = "block";
                        break;
                    case "external_video":
                        const {
                            host: i,
                            external_id: s
                        } = e;
                        i && s && loadExternalVideo(n, i, s), n.style.display = "block";
                        break
                }
            }
            onLoadedMasterImageHandler(e) {
                this.$masterImg.style.display = "block"
            }
            setImage(e = 0) {
                if (e === this.index) return;
                e < 0 ? e = this.media.length - 1 : e >= this.media.length && (e = 0);
                for (let a = 0; a < this.$master.children.length - 1; a++) this.$master.children[a].style.display = "none";
                this.turnOffZoom(), this.media[e].media_type === "image" ? (this.$masterImg.src = this.media[e].preview_image.src, this.$hint.style.display = "block") : (this.$masterImg.style.display = "none", this.$hint.style.display = "none"), this.handleSelectMedia(this.media[e]), this.$Items[this.index].removeAttribute("data-active"), this.scrollItemToView(e), this.$Items[e].setAttribute("data-active", ""), this.index = e
            }
            handleClickItem(e) {
                e = e.closest(j.selector.item);
                const n = Number.parseInt(e.getAttribute("data-index"));
                this.setImage(n)
            }
            scrollItemToView(e) {
                const n = this.$List,
                    a = this.$Items[e],
                    r = n.scrollLeft > a.offsetLeft,
                    o = a.offsetLeft + a.offsetWidth > n.scrollLeft + n.offsetWidth;
                let i = null;
                if (r && (i = a.offsetLeft - a.offsetWidth * .75, e === 0 && (i = 0)), o) {
                    const s = a.offsetLeft + a.offsetWidth - (n.scrollLeft + n.offsetWidth);
                    i = n.scrollLeft + s + a.offsetWidth * .5
                }
                if (i !== null && this.$List.scroll({
                        left: i,
                        behavior: "smooth"
                    }), i === null && n.scrollLeft === 0 && a.offsetLeft === 0 && e !== 0) {
                    let s = null;
                    s = setInterval(() => {
                        a.offsetLeft && (clearInterval(s), this.$List.scroll({
                            left: a.offsetLeft - a.offsetWidth * .75,
                            behavior: "smooth"
                        }))
                    }, 100)
                }
            }
            handleSwipe() {
                const e = this.$masterImg,
                    n = 70;
                let a = {
                        x: 0,
                        time: 0
                    },
                    r = 0;
                const o = s => {
                        this.transformState.scale <= 1 && s.touches.length > 1 && (r = s.timeStamp), this.transformState.scale <= 1 && s.changedTouches && (a = {
                            x: s.changedTouches[0].clientX,
                            time: s.timeStamp
                        })
                    },
                    i = s => {
                        var c;
                        if (this.transformState.scale <= 1 && s.timeStamp - r < 500) return !1;
                        if (this.transformState.scale <= 1 && ((c = s.changedTouches) == null ? void 0 : c.length) === 1 && s.touches.length === 0) {
                            const d = s.changedTouches[0].clientX - a.x;
                            s.timeStamp - a.time < 500 && Math.abs(d) > n && (d > n && this.setImage(this.index - 1), d < -n && this.setImage(this.index + 1))
                        }
                    };
                e.addEventListener("touchstart", o, {
                    passive: !0
                }), e.addEventListener("touchend", i)
            }
            loadCSS() {
                const e = window.__pagefly_setting__,
                    n = document.createElement("link");
                n.rel = "stylesheet", n.href = `${e.baseURL}/static/assets/imageGallery.css?v=${e.pageflyVersion}`, document.head.appendChild(n)
            }
        };
    let MediaGallery = j;
    b(MediaGallery, "desktopScale", 2.5), b(MediaGallery, "selector", {
        container: ".pf-gallery-container",
        master: ".pf-gallery-master",
        list: ".pf-gallery-list",
        item: ".pf-gallery-item",
        exit: ".pf-gallery-exit",
        arrow: ".pf-gallery-arrow",
        left: ".pf-left",
        right: ".pf-right",
        hint: ".pf-gallery-hint"
    }), b(MediaGallery, "classes", {
        hide: "pf-gallery-hide"
    }), b(MediaGallery, "html", {
        container: (e, n, a) => `
			<span class="pf-gallery-exit">&times;</span>
			<div class="pf-image-gallery">
				${a>1?`<span class="pf-gallery-arrow pf-left">${leftIcon}</span>
			  <span class="pf-gallery-arrow pf-right">${rightIcon}</span>`:""}
				<div class="pf-gallery-master">
				  <img draggable="false" src="${e}" alt="Master Image"/>
				  <div class="video-wrapper"></div>
				  <button class="pf-gallery-hint">Click or tap to zoom</button>
				 
				</div>
				<div class="pf-gallery-list">
					${n}
				</div>
			</div>

		`,
        item: (e, n, a) => `
			<div class="pf-gallery-item" data-index="${n}" ${n===0?"data-active":""} 
            ${a==="image"?"data-image":""}
      >
				<img src="${e}&width=450" alt="Image item" loading="lazy" decoding="async" fetchpriority="low"/>
				<span class="icon-indicator">
				  ${a==="model"?modelIcon:videoIcon}
        </span>
			</div>
		`
    });

    function getCurrentRatio(t) {
        const e = getDevice(),
            n = t[e];
        return n === "unset" ? t.all : n
    }

    function getIndexOfUserDefaultSource(t, e) {
        var v, y, p, S;
        const n = t.getAttribute("data-product-id"),
            a = t.closest('div[data-pf-type="ProductBox"]'),
            r = pageflyProducts[n],
            {
                media: o = []
            } = r || {},
            i = getFrontEndSettings(t),
            s = (i == null ? void 0 : i.imageSource) || "featured",
            c = window.location.search,
            l = new URLSearchParams(c).get("variant");
        if (s === "default-variant" && a && !l) {
            const T = a.getAttribute("data-default-variant");
            return (p = (y = (v = r == null ? void 0 : r.variants) == null ? void 0 : v.find(w => w.id == T)) == null ? void 0 : y.featured_media) == null ? void 0 : p.position
        }
        const u = l ? (S = r == null ? void 0 : r.variants) == null ? void 0 : S.findIndex(T => T.id.toString() === l) : -1,
            f = u > 0 ? u : 0,
            h = r == null ? void 0 : r.variants[f];
        if ((s === "variant" || u >= 0) && h && (h == null ? void 0 : h.featured_media)) {
            const T = o.findIndex(I => {
                const w = I.id;
                return h.featured_media.id === w
            });
            return T ? T + 1 : 0
        }
        return 0
    }

    function getProductMediaId2(t) {
        const e = t == null ? void 0 : t.closest('[data-pf-type="ProductMedia2"]');
        return `${getElemIdByClassname(e==null?void 0:e.className)+(e==null?void 0:e.getAttribute("data-product-id"))}_${e==null?void 0:e.getAttribute("data-media-id")}`
    }

    function handleAddStyleScrollSnapType(t) {
        t.container && (t.container.style.scrollSnapType = "x mandatory")
    }
    const dataCss = "@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__container{position:relative;box-sizing:border-box}.splide__list{margin:0!important;padding:0!important;width:-webkit-max-content;width:max-content;will-change:transform}.splide.is-active .splide__list{display:flex}.splide__pagination{display:flex;align-items:center;flex-wrap:wrap;justify-content:center;padding:0;margin:7px 0 0;}.splide__pagination li{list-style-type:none;line-height:1;}.splide{visibility:hidden}.splide,.splide__slide{position:relative;outline:none}.splide__slide{box-sizing:border-box;list-style-type:none!important;margin:0;flex-shrink:0}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid #999;border-left-color:transparent;animation:splide-loading 1s linear infinite}.splide__track{position:relative;z-index:0;overflow:hidden}.splide--draggable>.splide__track>.splide__list>.splide__slide{-webkit-user-select:none;user-select:none}.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__track>.splide__list>.splide__slide{position:absolute;top:0;left:0;z-index:0;opacity:0}.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{position:relative;z-index:1;opacity:1}.splide--rtl{direction:rtl}.splide--ttb>.splide__track>.splide__list{display:block}.splide--ttb>.splide__pagination{width:auto}.splide__arrow{position:absolute;z-index:1;top:50%;transform:translateY(-50%);width:2em;height:2em;border-radius:2px;display:flex;align-items:center;justify-content:center;border:none;padding:0;opacity:.7;background:#ccc}.splide__arrow svg{width:1.2em;height:1.2em}.splide__arrow:hover{cursor:pointer;opacity:.9}.splide__arrow:focus{outline:none}.splide__arrow--prev{left:1em}.splide__arrow--prev svg{transform:scaleX(-1)}.splide__arrow--next{right:1em}.splide__pagination__page{display:inline-block;width:8px;height:8px;background:#d9d9d9;border-radius:50% !important;margin:3px;padding:0!important;min-height:initial!important;transition:transform .2s linear;border:none;opacity:.5;min-width:initial;box-shadow:initial;background-blend-mode: multiply;mix-blend-mode: exclusion;}.splide__pagination__page.is-active{transform:scale(1.4);opacity:1;}.splide__pagination__page:hover{cursor:pointer;opacity:1;box-shadow:initial;}.splide__pagination__page:focus{outline:none}.splide__progress__bar{width:0;height:3px;background:#d9d9d9}.splide--nav>.splide__track>.splide__list>.splide__slide{border:3px solid transparent}.splide--nav>.splide__track>.splide__list>.splide__slide.is-active{border-color:#000}.splide--nav>.splide__track>.splide__list>.splide__slide:focus{outline:none}.splide--rtl>.splide__arrows .splide__arrow--prev,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev{right:1em;left:auto}.splide--rtl>.splide__arrows .splide__arrow--prev svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--prev svg{transform:scaleX(1)}.splide--rtl>.splide__arrows .splide__arrow--next,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next{left:1em;right:auto}.splide--rtl>.splide__arrows .splide__arrow--next svg,.splide--rtl>.splide__track>.splide__arrows .splide__arrow--next svg{transform:scaleX(-1)}.splide--ttb>.splide__arrows .splide__arrow,.splide--ttb>.splide__track>.splide__arrows .splide__arrow{left:50%;transform:translate(-50%)}.splide--ttb>.splide__arrows .splide__arrow--prev,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev{top:1em}.splide--ttb>.splide__arrows .splide__arrow--prev svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--prev svg{transform:rotate(-90deg)}.splide--ttb>.splide__arrows .splide__arrow--next,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next{top:auto;bottom:1em}.splide--ttb>.splide__arrows .splide__arrow--next svg,.splide--ttb>.splide__track>.splide__arrows .splide__arrow--next svg{transform:rotate(90deg)}.splide--ttb>.splide__pagination{display:flex;flex-direction:column;bottom:50%;left:auto;right:.5em;transform:translateY(50%)}";

    function loadJS(t, e = document.body, n = !0, a = !1) {
        return new Promise((r, o) => {
            const i = e.ownerDocument;
            if (i.querySelector(`script[src="${t}"]`)) return r(!0);
            const s = i.createElement("script");
            s.src = t, s.async = n, s.defer = a, s.onload = r, s.onerror = o, e.appendChild(s)
        })
    }(function(t, e) {
        typeof exports == "object" && typeof module == "object" ? module.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof exports == "object" ? exports.SnapSlider = e() : t.SnapSlider = e()
    })(window, function() {
        return function(t) {
            var e = {};

            function n(a) {
                if (e[a]) return e[a].exports;
                var r = e[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return t[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = t, n.c = e, n.d = function(a, r, o) {
                n.o(a, r) || Object.defineProperty(a, r, {
                    enumerable: !0,
                    get: o
                })
            }, n.r = function(a) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }, n.t = function(a, r) {
                if (1 & r && (a = n(a)), 8 & r || 4 & r && typeof a == "object" && a && a.__esModule) return a;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: a
                    }), 2 & r && typeof a != "string")
                    for (var i in a) n.d(o, i, function(s) {
                        return a[s]
                    }.bind(null, i));
                return o
            }, n.n = function(a) {
                var r = a && a.__esModule ? function() {
                    return a.default
                } : function() {
                    return a
                };
                return n.d(r, "a", r), r
            }, n.o = function(a, r) {
                return Object.prototype.hasOwnProperty.call(a, r)
            }, n.p = "", n(n.s = 18)
        }([function(t, e) {
            t.exports = function(n) {
                var a = typeof n;
                return n != null && (a == "object" || a == "function")
            }
        }, function(t, e, n) {
            var a = n(0),
                r = n(7),
                o = n(10),
                i = Math.max,
                s = Math.min;
            t.exports = function(c, d, l) {
                var u, f, h, v, y, p, S = 0,
                    T = !1,
                    I = !1,
                    w = !0;
                if (typeof c != "function") throw TypeError("Expected a function");

                function C(_) {
                    var L = u,
                        A = f;
                    return u = f = void 0, S = _, v = c.apply(A, L)
                }

                function O(_) {
                    var L = _ - p;
                    return p === void 0 || L >= d || L < 0 || I && _ - S >= h
                }

                function k() {
                    var _, L, A = r();
                    if (O(A)) return q(A);
                    y = setTimeout(k, (L = d - ((_ = A) - p), I ? s(L, h - (_ - S)) : L))
                }

                function q(_) {
                    return y = void 0, w && u ? C(_) : (u = f = void 0, v)
                }

                function D() {
                    var _, L = r(),
                        A = O(L);
                    if (u = arguments, f = this, p = L, A) {
                        if (y === void 0) return S = _ = p, y = setTimeout(k, d), T ? C(_) : v;
                        if (I) return clearTimeout(y), y = setTimeout(k, d), C(p)
                    }
                    return y === void 0 && (y = setTimeout(k, d)), v
                }
                return d = o(d) || 0, a(l) && (T = !!l.leading, h = (I = "maxWait" in l) ? i(o(l.maxWait) || 0, d) : h, w = "trailing" in l ? !!l.trailing : w), D.cancel = function() {
                    y !== void 0 && clearTimeout(y), S = 0, u = p = f = y = void 0
                }, D.flush = function() {
                    return y === void 0 ? v : q(r())
                }, D
            }
        }, function(t, e, n) {
            var a = n(1),
                r = n(0);
            t.exports = function(o, i, s) {
                var c = !0,
                    d = !0;
                if (typeof o != "function") throw TypeError("Expected a function");
                return r(s) && (c = "leading" in s ? !!s.leading : c, d = "trailing" in s ? !!s.trailing : d), a(o, i, {
                    leading: c,
                    maxWait: i,
                    trailing: d
                })
            }
        }, function(t, e, n) {
            var a = n(8),
                r = typeof self == "object" && self && self.Object === Object && self,
                o = a || r || Function("return this")();
            t.exports = o
        }, function(t, e, n) {
            var a = n(3).Symbol;
            t.exports = a
        }, function(t, e, n) {
            t.exports = {
                polyfill: function() {
                    var a = window,
                        r = document;
                    if (!("scrollBehavior" in r.documentElement.style) || a.__forceSmoothScrollPolyfill__ === !0) {
                        var o, i = a.HTMLElement || a.Element,
                            s = {
                                scroll: a.scroll || a.scrollTo,
                                scrollBy: a.scrollBy,
                                elementScroll: i.prototype.scroll || l,
                                scrollIntoView: i.prototype.scrollIntoView
                            },
                            c = a.performance && a.performance.now ? a.performance.now.bind(a.performance) : Date.now,
                            d = (o = a.navigator.userAgent, RegExp("MSIE |Trident/|Edge/").test(o) ? 1 : 0);
                        a.scroll = a.scrollTo = function() {
                            arguments[0] !== void 0 && (u(arguments[0]) !== !0 ? y.call(a, r.body, arguments[0].left !== void 0 ? ~~arguments[0].left : a.scrollX || a.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : a.scrollY || a.pageYOffset) : s.scroll.call(a, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : a.scrollX || a.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : a.scrollY || a.pageYOffset))
                        }, a.scrollBy = function() {
                            arguments[0] !== void 0 && (u(arguments[0]) ? s.scrollBy.call(a, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0) : y.call(a, r.body, ~~arguments[0].left + (a.scrollX || a.pageXOffset), ~~arguments[0].top + (a.scrollY || a.pageYOffset)))
                        }, i.prototype.scroll = i.prototype.scrollTo = function() {
                            if (arguments[0] !== void 0)
                                if (u(arguments[0]) !== !0) {
                                    var p = arguments[0].left,
                                        S = arguments[0].top;
                                    y.call(this, this, p === void 0 ? this.scrollLeft : ~~p, S === void 0 ? this.scrollTop : ~~S)
                                } else {
                                    if (typeof arguments[0] == "number" && arguments[1] === void 0) throw SyntaxError("Value could not be converted");
                                    s.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop)
                                }
                        }, i.prototype.scrollBy = function() {
                            arguments[0] !== void 0 && (u(arguments[0]) !== !0 ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : s.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, i.prototype.scrollIntoView = function() {
                            if (u(arguments[0]) !== !0) {
                                var p = function(w) {
                                        for (; w !== r.body && v(w) === !1;) w = w.parentNode || w.host;
                                        return w
                                    }(this),
                                    S = p.getBoundingClientRect(),
                                    T = this.getBoundingClientRect();
                                p !== r.body ? (y.call(this, p, p.scrollLeft + T.left - S.left, p.scrollTop + T.top - S.top), a.getComputedStyle(p).position !== "fixed" && a.scrollBy({
                                    left: S.left,
                                    top: S.top,
                                    behavior: "smooth"
                                })) : a.scrollBy({
                                    left: T.left,
                                    top: T.top,
                                    behavior: "smooth"
                                })
                            } else s.scrollIntoView.call(this, arguments[0] === void 0 || arguments[0])
                        }
                    }

                    function l(p, S) {
                        this.scrollLeft = p, this.scrollTop = S
                    }

                    function u(p) {
                        if (p === null || typeof p != "object" || p.behavior === void 0 || p.behavior === "auto" || p.behavior === "instant") return !0;
                        if (typeof p == "object" && p.behavior === "smooth") return !1;
                        throw TypeError("behavior member of ScrollOptions " + p.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }

                    function f(p, S) {
                        return S === "Y" ? p.clientHeight + d < p.scrollHeight : S === "X" ? p.clientWidth + d < p.scrollWidth : void 0
                    }

                    function h(p, S) {
                        var T = a.getComputedStyle(p, null)["overflow" + S];
                        return T === "auto" || T === "scroll"
                    }

                    function v(p) {
                        var S = f(p, "Y") && h(p, "Y"),
                            T = f(p, "X") && h(p, "X");
                        return S || T
                    }

                    function y(p, S, T) {
                        var I, w, C, O, k = c();
                        p === r.body ? (I = a, w = a.scrollX || a.pageXOffset, C = a.scrollY || a.pageYOffset, O = s.scroll) : (I = p, w = p.scrollLeft, C = p.scrollTop, O = l),
                            function q(D) {
                                var _, L, A, x = (c() - D.startTime) / 468;
                                _ = .5 * (1 - Math.cos(Math.PI * (x = x > 1 ? 1 : x))), L = D.startX + (D.x - D.startX) * _, A = D.startY + (D.y - D.startY) * _, D.method.call(D.scrollable, L, A), L === D.x && A === D.y || a.requestAnimationFrame(q.bind(a, D))
                            }({
                                scrollable: I,
                                method: O,
                                startTime: k,
                                startX: w,
                                startY: C,
                                x: S,
                                y: T
                            })
                    }
                }
            }
        }, function(t, e) {
            var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'],
                a = n.join(","),
                r = typeof Element > "u" ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

            function o(f, h) {
                h = h || {};
                var v, y, p, S = [],
                    T = [],
                    I = f.querySelectorAll(a);
                for (h.includeContainer && r.call(f, a) && (I = Array.prototype.slice.apply(I)).unshift(f), v = 0; v < I.length; v++) i(y = I[v]) && ((p = d(y)) === 0 ? S.push(y) : T.push({
                    documentOrder: v,
                    tabIndex: p,
                    node: y
                }));
                return T.sort(l).map(function(w) {
                    return w.node
                }).concat(S)
            }

            function i(f) {
                var h, v;
                return !(!s(f) || u(v = h = f) && v.type === "radio" && ! function(y) {
                    if (!y.name) return !0;
                    var p = function(S) {
                        for (var T = 0; T < S.length; T++)
                            if (S[T].checked) return S[T]
                    }(y.ownerDocument.querySelectorAll('input[type="radio"][name="' + y.name + '"]'));
                    return !p || p === y
                }(h) || 0 > d(f))
            }

            function s(f) {
                var h, v;
                return !(f.disabled || u(h = f) && h.type === "hidden" || (v = f).offsetParent === null || getComputedStyle(v).visibility === "hidden")
            }
            o.isTabbable = function(f) {
                if (!f) throw Error("No node provided");
                return r.call(f, a) !== !1 && i(f)
            }, o.isFocusable = function(f) {
                if (!f) throw Error("No node provided");
                return r.call(f, c) !== !1 && s(f)
            };
            var c = n.concat("iframe").join(",");

            function d(f) {
                var h = parseInt(f.getAttribute("tabindex"), 10);
                return isNaN(h) ? f.contentEditable === "true" ? 0 : f.tabIndex : h
            }

            function l(f, h) {
                return f.tabIndex === h.tabIndex ? f.documentOrder - h.documentOrder : f.tabIndex - h.tabIndex
            }

            function u(f) {
                return f.tagName === "INPUT"
            }
            t.exports = o
        }, function(t, e, n) {
            var a = n(3);
            t.exports = function() {
                return a.Date.now()
            }
        }, function(t, e, n) {
            (function(a) {
                var r = typeof a == "object" && a && a.Object === Object && a;
                t.exports = r
            }).call(this, n(9))
        }, function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")()
            } catch {
                typeof window == "object" && (n = window)
            }
            t.exports = n
        }, function(t, e, n) {
            var a = n(11),
                r = n(0),
                o = n(13),
                i = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                d = parseInt;
            t.exports = function(l) {
                if (typeof l == "number") return l;
                if (o(l)) return NaN;
                if (r(l)) {
                    var u = typeof l.valueOf == "function" ? l.valueOf() : l;
                    l = r(u) ? u + "" : u
                }
                if (typeof l != "string") return l === 0 ? l : +l;
                l = a(l);
                var f = s.test(l);
                return f || c.test(l) ? d(l.slice(2), f ? 2 : 8) : i.test(l) ? NaN : +l
            }
        }, function(t, e, n) {
            var a = n(12),
                r = /^\s+/;
            t.exports = function(o) {
                return o && o.slice(0, a(o) + 1).replace(r, "")
            }
        }, function(t, e) {
            var n = /\s/;
            t.exports = function(a) {
                for (var r = a.length; r-- && n.test(a.charAt(r)););
                return r
            }
        }, function(t, e, n) {
            var a = n(14),
                r = n(17);
            t.exports = function(o) {
                return typeof o == "symbol" || r(o) && a(o) == "[object Symbol]"
            }
        }, function(t, e, n) {
            var a = n(4),
                r = n(15),
                o = n(16),
                i = a ? a.toStringTag : void 0;
            t.exports = function(s) {
                return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : i && i in Object(s) ? r(s) : o(s)
            }
        }, function(t, e, n) {
            var a = n(4),
                r = Object.prototype,
                o = r.hasOwnProperty,
                i = r.toString,
                s = a ? a.toStringTag : void 0;
            t.exports = function(c) {
                var d = o.call(c, s),
                    l = c[s];
                try {
                    c[s] = void 0;
                    var u = !0
                } catch {}
                var f = i.call(c);
                return u && (d ? c[s] = l : delete c[s]), f
            }
        }, function(t, e) {
            var n = Object.prototype.toString;
            t.exports = function(a) {
                return n.call(a)
            }
        }, function(t, e) {
            t.exports = function(n) {
                return n != null && typeof n == "object"
            }
        }, function(t, e, n) {
            n.r(e);
            var a = function(_) {
                    var L = _.Element.prototype;
                    typeof L.matches != "function" && (L.matches = L.msMatchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || function(A) {
                        for (var x = (this.document || this.ownerDocument).querySelectorAll(A), m = 0; x[m] && x[m] !== this;) ++m;
                        return Boolean(x[m])
                    }), typeof L.closest != "function" && (L.closest = function(A) {
                        for (var x = this; x && x.nodeType === 1;) {
                            if (x.matches(A)) return x;
                            x = x.parentNode
                        }
                        return null
                    })
                },
                r = n(5),
                o = n.n(r),
                i = n(6),
                s = n.n(i),
                c = n(1),
                d = n.n(c),
                l = n(2),
                u = n.n(l);

            function f(_) {
                return Array.prototype.slice.call(_)
            }

            function h(_, L) {
                return _ ? f((L || document).querySelectorAll(_)) : []
            }

            function v(_, L) {
                return typeof _ == "string" ? h(_, L) : _ instanceof Element ? [_] : _ ? Array.prototype.slice.call(_) : []
            }

            function y(_, L) {
                return Object.prototype.hasOwnProperty.call(_, L)
            }

            function p(_) {
                return _ && _.constructor.name === "Object"
            }

            function S(_, L, A) {
                return _ = Math.max(L, _ = Math.min(A, _))
            }
            var T = function() {
                var _ = !1;
                try {
                    var L = Object.defineProperty({}, "passive", {
                        get: function() {
                            _ = {
                                passive: !0
                            }
                        }
                    });
                    window.addEventListener("testPassive", null, L), window.removeEventListener("testPassive", null, L)
                } catch {}
                return _
            }();

            function I(_, L) {
                var A = Object.keys(_);
                if (Object.getOwnPropertySymbols) {
                    var x = Object.getOwnPropertySymbols(_);
                    L && (x = x.filter(function(m) {
                        return Object.getOwnPropertyDescriptor(_, m).enumerable
                    })), A.push.apply(A, x)
                }
                return A
            }

            function w(_) {
                for (var L = 1; L < arguments.length; L++) {
                    var A = arguments[L] != null ? arguments[L] : {};
                    L % 2 ? I(Object(A), !0).forEach(function(x) {
                        C(_, x, A[x])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(A)) : I(Object(A)).forEach(function(x) {
                        Object.defineProperty(_, x, Object.getOwnPropertyDescriptor(A, x))
                    })
                }
                return _
            }

            function C(_, L, A) {
                return L in _ ? Object.defineProperty(_, L, {
                    value: A,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : _[L] = A, _
            }

            function O(_, L) {
                for (var A = 0; A < L.length; A++) {
                    var x = L[A];
                    x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(_, x.key, x)
                }
            }
            var k, q = 1,
                D = function() {
                    var _, L, A;

                    function x(m) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        (function(P, M) {
                            if (!(P instanceof M)) throw TypeError("Cannot call a class as a function")
                        })(this, x), this.terms = {
                            prev: /(prev|back|before|left|up)/,
                            next: /(next|forward|after|right|down)/
                        }, this.callbacks = {
                            load: [],
                            change: [],
                            "change.click": [],
                            "change.scroll": [],
                            "change.keydown": [],
                            "change.focusin": [],
                            scroll: [],
                            "scroll.start": [],
                            "scroll.end": []
                        }, this.init(m, g), this.container && (this.watchForChanges(), this.container.SnapSlider = this, window._SnapSliders[this.id] = this)
                    }
                    return _ = x, A = [{
                        key: "isValidIndex",
                        value: function(m) {
                            return ["first", "middle", "last", "prev", "next"].indexOf(m) >= 0 || parseInt(m, 10) >= 1
                        }
                    }, {
                        key: "getButtonTarget",
                        value: function(m) {
                            var g = m ? m.getAttribute("data-snap-slider-goto") : "";
                            if (!g) return {};
                            var E = g.split(":").map(function(N) {
                                    return N.trim()
                                }),
                                P = E.pop(),
                                M = E.pop();
                            if (!M) {
                                var F = m.closest("[data-snap-slider-nav]"),
                                    R = m.closest("[data-snap-slider]");
                                F && (M = F.getAttribute("data-snap-slider-nav")), R && (M = R.getAttribute("data-snap-slider"))
                            }
                            if (!M) {
                                var B = m.closest("data-snap-slider");
                                B && (M = B.getAttribute("data-snap-slider"))
                            }
                            return {
                                sliderID: M,
                                index: P
                            }
                        }
                    }, {
                        key: "handleGoto",
                        value: function(m) {
                            var g = m.target.closest("[data-snap-slider-goto]"),
                                E = x.getButtonTarget(g),
                                P = E.sliderID,
                                M = E.index,
                                F = window._SnapSliders[P];
                            F && F.goto(M, null, m)
                        }
                    }, {
                        key: "isRelative",
                        value: function(m) {
                            return m === "prev" || m === "next"
                        }
                    }, {
                        key: "notFound",
                        value: function(m) {}
                    }, {
                        key: "get",
                        value: function(m) {
                            return window._SnapSliders[m]
                        }
                    }, {
                        key: "debug",
                        value: function(m) {}
                    }], L = [{
                        key: "init",
                        value: function(m) {
                            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            p(m) && (g = m), this.options = w({
                                container: m,
                                id: "",
                                slides: "",
                                nav: "",
                                buttons: "",
                                prev: "",
                                next: "",
                                start: 0,
                                loop: null,
                                on: {}
                            }, g);
                            var E = v(this.options.container).shift();
                            if (E) {
                                for (var P in this.container = E, this.options.buttons = g.buttons || this.container.getAttribute("data-snap-slider-buttons"), this.options.prev = g.prev || this.container.getAttribute("data-snap-slider-prev"), this.options.next = g.next || this.container.getAttribute("data-snap-slider-next"), this.id = this.getMaybeSetID(E, this.options.id), this.slides = this.getMaybeSetSlides(E, this.options.slides), this.align = this.getMaybeSetAlign(E, this.options.align), this.current = this.getMaybeSetStart(E, this.options.start), this.loop = this.getMaybeSetLoop(E, this.options.loop), this.transition = null, this.scrolling = !1, this.options.on) y(this.options.on, P) && this.on(P, this.options.on[P]);
                                var M, F = (M = this.options, ["buttons", "prev", "next"].reduce(function(R, B) {
                                    return R[B] = M[B], R
                                }, {}));
                                this.addGotoButtons(w(w({}, F), {}, {
                                    container: E
                                })), this.addNav('[data-snap-slider-nav="'.concat(this.id, '"]'), F), this.options.nav && this.addNav(this.options.nav, F), this.update()
                            }
                        }
                    }, {
                        key: "getMaybeSetID",
                        value: function(m, g) {
                            return (g = g || m.getAttribute("data-snap-slider") || m.id) || (g = "slider-".concat(q), q += 1), m.setAttribute("data-snap-slider", g), g
                        }
                    }, {
                        key: "getMaybeSetSlides",
                        value: function(m, g) {
                            g = g && typeof g == "string" ? g : m.getAttribute("data-snap-slider-slides"), m.setAttribute("data-snap-slider-slides", g || "");
                            var E = g ? v(g, m) : f(m.children);
                            return E.forEach(function(P) {
                                return P.setAttribute("tabindex", "-1")
                            }), E
                        }
                    }, {
                        key: "getMaybeSetAlign",
                        value: function(m, g) {
                            return g = g || m.getAttribute("data-snap-slider-align") || "", m.setAttribute("data-snap-slider-align", g), g
                        }
                    }, {
                        key: "getMaybeSetStart",
                        value: function(m, g) {
                            return x.isValidIndex(g) || (g = m.getAttribute("data-snap-slider-start") || 1), m.setAttribute("data-snap-slider-start", g), g
                        }
                    }, {
                        key: "getMaybeSetLoop",
                        value: function(m, g) {
                            return g = typeof g == "boolean" ? g : m.getAttribute("data-snap-slider-loop") === "true", m.setAttribute("data-snap-slider-loop", g), g
                        }
                    }, {
                        key: "getSnapAlign",
                        value: function(m) {
                            var g, E, P, M = "scrollSnapAlign",
                                F = (g = m, (E = window.getComputedStyle(g)) && y(E, M) ? E[M] : ""),
                                R = "data-snap-slider-align";
                            return F && 0 > F.indexOf("none") ? F : ((P = m) && (P = P.closest("[".concat(R, "]"))) ? P.getAttribute(R) : "") || "start"
                        }
                    }, {
                        key: "getSlide",
                        value: function(m) {
                            return m = this.getIndexNumber(m), this.slides[m - 1]
                        }
                    }, {
                        key: "getCurrentSlide",
                        value: function() {
                            return this.slides[this.current - 1]
                        }
                    }, {
                        key: "getIndexNumber",
                        value: function(m) {
                            var g;
                            return g = m === "first" ? 1 : m === "middle" ? Math.ceil(this.slides.length / 2) : m === "last" ? this.slides.length : m === "prev" ? this.current - 1 : m === "next" ? this.current + 1 : parseInt(m, 10) || -1, this.loop ? (g < 1 && (g = this.slides.length), g > this.slides.length && (g = 1)) : (g < 1 || g > this.slides.length) && (g = -1), g || 1
                        }
                    }, {
                        key: "getScrollOffset",
                        value: function(m) {
                            var g = this.container,
                                E = this.getSnapAlign(m),
                                P = m.offsetTop,
                                M = m.offsetLeft;
                            return E.indexOf("center") >= 0 ? (P = m.offsetTop + m.offsetHeight / 2 - g.offsetHeight / 2, M = m.offsetLeft + m.offsetWidth / 2 - g.offsetWidth / 2) : E.indexOf("end") >= 0 && (P = m.offsetTop - g.offsetHeight + m.offsetHeight, M = m.offsetLeft - g.offsetWidth + m.offsetWidth), {
                                top: P = S(P, 0, g.scrollHeight),
                                left: M = S(M, 0, g.scrollWidth)
                            }
                        }
                    }, {
                        key: "goto",
                        value: function(m) {
                            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                                E = arguments.length > 2 ? arguments[2] : void 0;
                            g = w({
                                focus: !0,
                                force: !1,
                                ignoreCallbacks: !1,
                                immediate: !1
                            }, g);
                            var P = this.getIndexNumber(m);
                            if (!g.force && P === this.current) return !1;
                            var M = this.getSlide(P);
                            if (!M) return !1;
                            var F = this.getScrollOffset(M),
                                R = F.top,
                                B = F.left;
                            return g.immediate ? typeof this.container.scroll == "function" && this.container.scroll({
                                top: R,
                                left: B
                            }) : (this.startTransition(P), typeof this.container.scroll == "function" && this.container.scroll({
                                top: R,
                                left: B,
                                behavior: "smooth"
                            })), this.current = P, this.fireEvent("change", E, g), !0
                        }
                    }, {
                        key: "buildGoto",
                        value: function(m) {
                            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
                                E = "";
                            return m || (E += "".concat(this.id, ":")), E + g
                        }
                    }, {
                        key: "setGoto",
                        value: function(m, g) {
                            var E = this;
                            (m = v(m)).forEach(function(P) {
                                P.setAttribute("data-snap-slider-goto", E.buildGoto(P.closest("[data-snap-slider], [data-snap-slider-nav]"), g))
                            })
                        }
                    }, {
                        key: "startTransition",
                        value: function(m) {
                            var g = this;
                            this.transition = {
                                from: this.current,
                                to: m,
                                diff: Math.abs(m - this.current)
                            };
                            var E = this.transition.to;
                            this.checkTransition && clearTimeout(this.checkTransition), this.checkTransition = setTimeout(function() {
                                g.transition.to === E && g.stopTransition()
                            }, 1e3)
                        }
                    }, {
                        key: "stopTransition",
                        value: function() {
                            this.transition = null, clearTimeout(this.checkTransition)
                        }
                    }, {
                        key: "isPrevButton",
                        value: function(m) {
                            return !!(m = v(m).shift()) && ((m.getAttribute("data-snap-slider-goto") || "").match(/\bprev$/) || m.textContent.toLowerCase().match(this.terms.prev) || m.className.toLowerCase().match(this.terms.prev))
                        }
                    }, {
                        key: "isNextButton",
                        value: function(m) {
                            return !!(m = v(m).shift()) && ((m.getAttribute("data-snap-slider-goto") || "").match(/\bnext$/) || m.textContent.toLowerCase().match(this.terms.next) || m.className.toLowerCase().match(this.terms.next))
                        }
                    }, {
                        key: "isCurrent",
                        value: function(m) {
                            return !x.isRelative(m) && this.getIndexNumber(m) === this.current
                        }
                    }, {
                        key: "addGotoButtons",
                        value: function(m) {
                            var g = this,
                                E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            p(m) && (E = m);
                            var P = v((E = w({
                                    container: "",
                                    buttons: m,
                                    prev: "",
                                    next: ""
                                }, E)).buttons, E.container),
                                M = v(E.prev, E.container),
                                F = v(E.next, E.container);
                            M.forEach(function(B) {
                                return B.hasAttribute("data-snap-slider-goto") || g.setGoto(M, "prev")
                            }), F.forEach(function(B) {
                                return B.hasAttribute("data-snap-slider-goto") || g.setGoto(F, "next")
                            });
                            var R = 1;
                            return P.forEach(function(B) {
                                if (B.hasAttribute("data-snap-slider-goto")) return null;
                                if (g.isPrevButton(B)) return g.setGoto(B, "prev");
                                if (g.isNextButton(B)) return g.setGoto(B, "next");
                                var N = parseInt(B.textContent.replace(/.*\b(\d+)\b.*/, "$1"), 10) || R;
                                return R = N + 1, g.setGoto(B, N)
                            }), this.updateButtons(), !0
                        }
                    }, {
                        key: "getNavs",
                        value: function() {
                            var m = this;
                            return h("[data-snap-slider-nav]").filter(function(g) {
                                return g.getAttribute("data-snap-slider-nav") === m.id
                            })
                        }
                    }, {
                        key: "getButtons",
                        value: function() {
                            var m = this;
                            return h("[data-snap-slider-goto]").filter(function(g) {
                                return x.getButtonTarget(g).sliderID === m.id
                            })
                        }
                    }, {
                        key: "updateButtons",
                        value: function() {
                            var m = this;
                            this.current && this.getButtons().forEach(function(g) {
                                var E = x.getButtonTarget(g).index;
                                m.isCurrent(E) ? g.classList.add("is-current") : g.classList.remove("is-current"), !m.loop && x.isRelative(E) && (E === "prev" && m.current === 1 || E === "next" && m.current === m.slides.length ? g.classList.add("is-disabled") : g.classList.remove("is-disabled"))
                            })
                        }
                    }, {
                        key: "updateSlides",
                        value: function() {
                            var m = this;
                            this.slides.forEach(function(g, E) {
                                E === m.current - 1 ? (g.classList.add("is-current"), g.removeAttribute("aria-hidden"), h("[data-snap-slider-tabindex]", g).forEach(function(P) {
                                    P.removeAttribute("tabindex")
                                })) : (g.classList.remove("is-current"), g.setAttribute("aria-hidden", "true"), s()(g).forEach(function(P) {
                                    P.setAttribute("tabindex", "-1"), P.setAttribute("data-snap-slider-tabindex", "")
                                }))
                            })
                        }
                    }, {
                        key: "addNav",
                        value: function(m) {
                            var g = this,
                                E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            p(m) && (E = m);
                            var P = v((E = w({
                                container: m,
                                buttons: "",
                                prev: "",
                                next: ""
                            }, E)).container);
                            return !!P.length && (P.forEach(function(M) {
                                M.setAttribute("data-snap-slider-nav", g.id);
                                var F = M.getAttribute("data-snap-slider-buttons") || E.buttons || "button",
                                    R = E.prev || M.getAttribute("data-snap-slider-prev"),
                                    B = E.next || M.getAttribute("data-snap-slider-next");
                                g.addGotoButtons({
                                    container: M,
                                    buttons: F,
                                    prev: R,
                                    next: B
                                })
                            }), !0)
                        }
                    }, {
                        key: "getClosest",
                        value: function() {
                            var m = this;
                            return this.slides.reduce(function(g, E, P) {
                                P += 1;
                                var M = m.getScrollOffset(E),
                                    F = {
                                        index: P,
                                        slide: E,
                                        diff: {
                                            top: Math.abs(m.container.scrollTop - M.top),
                                            left: Math.abs(m.container.scrollLeft - M.left)
                                        }
                                    };
                                return g ? F.diff.left <= g.diff.left && F.diff.top <= g.diff.top ? F : g : F
                            }, !1)
                        }
                    }, {
                        key: "watchForChanges",
                        value: function() {
                            var m = this;
                            this.scrollListener = u()(function(g) {
                                var E = m.getClosest();
                                m.transition || E.index === m.current || (m.current = E.index, m.fireEvent("change", g)), m.scrolling || (m.scrolling = !0, m.fireEvent("scroll.start", g)), m.fireEvent("scroll", g)
                            }, 250), this.scrollEndListener = d()(function(g) {
                                m.scrolling = !1, m.fireEvent("scroll.end", g), m.stopTransition()
                            }, 100), this.arrowKeyListener = u()(function(g) {
                                if (!g.defaultPrevented) {
                                    var E = ["Up", "ArrowUp", "Left", "ArrowLeft"].indexOf(g.key) >= 0,
                                        P = ["Down", "ArrowDown", "Right", "ArrowRight"].indexOf(g.key) >= 0;
                                    (E || P) && (m.goto(P ? "next" : "prev", null, g), g.preventDefault())
                                }
                            }, 250), this.focusListener = function(g) {
                                var E, P;
                                m.scrolling && !m.transition || (m.slides.forEach(function(M, F) {
                                    M.contains(g.target) && (E = M, P = F + 1)
                                }, null), E && m.goto(P, null, g))
                            }, this.resizeObserver = {
                                observe: function() {},
                                disconnect: function() {}
                            }, "ResizeObserver" in window && (this.resizeObserver = new ResizeObserver(this.resizeCallback.bind(this))), setTimeout(function() {
                                m.container.addEventListener("scroll", m.scrollListener, T), m.container.addEventListener("scroll", m.scrollEndListener, T), m.resizeObserver.observe(m.container), m.fireEvent("load")
                            }, 100)
                        }
                    }, {
                        key: "hasLoaded",
                        value: function() {
                            this.container.classList.add("has-loaded")
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.goto(this.current, {
                                focus: !1,
                                force: !0,
                                ignoreCallbacks: !0,
                                immediate: !0
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            for (var m in this.stopTransition(), this.container.removeEventListener("scroll", this.scrollListener), this.container.removeEventListener("scroll", this.scrollEndListener), this.container.removeEventListener("keydown", this.arrowKeyListener), this.resizeObserver.disconnect(), this.callbacks) y(this.callbacks, m) && (this.callbacks[m] = []);
                            delete this.container.SnapSlider, delete window._SnapSliders[this.id]
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                                g = this.options;
                            delete g.on, delete m.container, delete m.id, this.init(this.container, w(w({}, g), m))
                        }
                    }, {
                        key: "resizeCallback",
                        value: function() {
                            this.update()
                        }
                    }, {
                        key: "fireEvent",
                        value: function(m, g) {
                            var E = this,
                                P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                            if (y(this.callbacks, m) && (P = w({
                                    focus: !0,
                                    ignoreCallbacks: !1
                                }, P), m === "load" && this.hasLoaded(), m === "change" && (this.updateButtons(), this.updateSlides()), P.focus && this.handleFocus(m, g), !P.ignoreCallbacks)) {
                                g = g || {};
                                var M = [m];
                                y(this.callbacks, "".concat(m, ".").concat(g.type)) && M.push("".concat(m, ".").concat(g.type)), M.forEach(function(F) {
                                    E.callbacks[F].forEach(function(R) {
                                        typeof R == "function" && R(E, g)
                                    })
                                })
                            }
                        }
                    }, {
                        key: "handleFocus",
                        value: function(m, g) {
                            if (this.transition) {
                                if (g && m === "change") {
                                    var E = g.target.closest("[data-snap-slider-goto]"),
                                        P = x.getButtonTarget(E).index;
                                    if (x.isRelative(P)) return
                                }
                                this.transition.diff > 1 && m === "scroll.end" && (document.activeElement && document.activeElement !== document.body && !document.activeElement.closest("[data-snap-slider-goto]") || this.getCurrentSlide().focus({
                                    preventScroll: !0
                                }))
                            }
                        }
                    }, {
                        key: "on",
                        value: function(m, g) {
                            y(this.callbacks, m) && typeof g == "function" && this.callbacks[m].push(g)
                        }
                    }], O(_.prototype, L), A && O(_, A), x
                }();
            window._SnapSliders = [], window.SnapSlider = D, typeof $ < "u" && !!$.fn && ($.fn.snapSlider = function(_) {
                return new D(this, _)
            }), k = function() {
                var _, L;
                a(window), o.a.polyfill(), h("[data-snap-slider]").forEach(function(A) {
                    return new D(A)
                }), _ = D.handleGoto, (L = document.querySelector("body")) && L.addEventListener("click", function(A) {
                    for (var x = L.querySelectorAll("[data-snap-slider-goto]"), m = A.target, g = 0, E = x.length; g < E; g += 1)
                        for (var P = m, M = x[g]; P && P !== L;) {
                            if (P === M) return _.call(M, A);
                            P = P.parentNode
                        }
                })
            }, document.readyState !== "loading" ? k() : document.addEventListener("DOMContentLoaded", k), e.default = D
        }]).default
    });
    const OBSERVATIONAL_ERROR_VALUE = 30,
        numberOfVisiblePaginationItemInNewLayout = 5;
    async function handleSlideshowVersion3() {
        const t = getDevice(),
            e = document.querySelectorAll('[data-pf-type="Slideshow"]');
        window.SnapSlider && e.forEach(n => {
            const a = getFrontEndSettings(n);
            if (!a) return;
            const {
                loop: r,
                autoPlay: o,
                maxHeight: i,
                navStyle: s,
                paginationStyle: c
            } = a, d = n.querySelector(".pf-slider");
            !i && updateSliderHeight(d, a, t, !0), new window.SnapSlider(d, {
                id: d.getAttribute("data-id"),
                slides: ".pf-slide",
                loop: r,
                on: {
                    load: l => {
                        initVisibleObservers(l), resizeSlideObserver$1(d, a, t), renderPaginationButtonsLiveView(l, a, t), handleNavigationButtons$1(l, a, t), handlePaginationButtons(l, a, t), handleSlidesScrollStop(l, a, t), o && handleAutoPlay$1(l, a, t)
                    },
                    "scroll.end": l => {
                        !i && updateSliderHeight(d, a, t), s !== "none" && updateNavigationButtonsState(l, a, t), c !== "none" && updatePaginationButtonsState(l, a, t)
                    }
                }
            })
        })
    }

    function renderPaginationButtonsLiveView(t, e, n) {
        const {
            paginationStyle: a
        } = e;
        if (a !== "none") {
            const r = t.container.querySelector(":scope > .pf-slider-nav");
            r.replaceChildren();
            let i = getTotalPaginationButtons(t, e, n);
            for (; i > 0;) {
                const s = document.createElement("button");
                s.setAttribute("type", "button"), r.appendChild(s), i--
            }
        }
    }

    function getTotalHeightOfActiveSlides(t, e = !1) {
        try {
            let n = 0;
            const a = t.querySelectorAll('[data-pf-type="SlideshowSlide"] > div');
            for (let r = 0; r < a.length; r++) {
                const o = a[r];
                o.style.height = "auto";
                const i = e ? parseInt(getComputedStyle(o).height) : o.getBoundingClientRect().height;
                n += Number(i || 0)
            }
            return n
        } catch (n) {
            return console.error(n), 0
        }
    }

    function getMaxHeightOfActiveSlides(t) {
        const n = Array.from(t.querySelectorAll(".pf-slide.is-visible")).map(r => getTotalHeightOfActiveSlides(r, !0));
        return Math.max(...n)
    }

    function updateSliderHeight(t, e, n, a = !1) {
        if (a) {
            const i = Array.from(t.querySelectorAll(".pf-slide")).map(c => getTotalHeightOfActiveSlides(c)).slice(0, e == null ? void 0 : e.slidesToShow[n]),
                s = Math.max(...i);
            t.style.height = `${s}px`
        } else if (shouldUpdateHeight(t)) {
            const r = getMaxHeightOfActiveSlides(t);
            t.style.height = `${r}px`
        }
    }

    function shouldUpdateHeight(t) {
        const e = t.querySelectorAll(".pf-slide"),
            a = t.scrollWidth / e.length,
            r = t.scrollLeft;
        for (let o = 0; o < (e == null ? void 0 : e.length); o++)
            if (a * o + OBSERVATIONAL_ERROR_VALUE >= r && r >= a * o - OBSERVATIONAL_ERROR_VALUE) return !0;
        return !1
    }

    function handleSlidesScrollStop(t, e, n) {
        const {
            slides: a
        } = t;
        for (let r = 0; r < a.length; r += Number(e == null ? void 0 : e.slidesToScroll[n])) a[r].style.scrollSnapStop = "always"
    }

    function getTotalPaginationButtons(t, e, n) {
        const {
            slidesToShow: a,
            slidesToScroll: r
        } = e;
        return Math.ceil((t.slides.length - a[n]) / r[n]) + 1
    }
    const getCurrentIndex = (t, e, n) => {
        if (e.displayPartialItems && e.displayPartialItems[n]) {
            const a = t.slides.findIndex(r => r.classList.contains("is-visible"));
            return Math.max(a + 1, 1)
        }
        return Number(t.current || 1)
    };

    function getActivePagination(t, e, n, a) {
        const r = a || getCurrentIndex(t, e, n);
        return Math.ceil((r - 1) / e.slidesToScroll[n])
    }
    const getNextSlideIndex = (t, e, n) => {
        const {
            slidesToShow: a,
            slidesToScroll: r
        } = e, o = t.slides.length;
        let i = Number(t.current) + Number(r[n]);
        return i > o && (i = o), i == o && (i = o - (Number(r[n]) - 1)), i < o && i > o - Number(a[n]) && (i = o - Number(a[n]) + 1), i
    };

    function handleNavigationButtons$1(t, e, n) {
        const {
            slidesToShow: a,
            slidesToScroll: r,
            loop: o,
            paginationStyle: i
        } = e, s = t.container.querySelector(":scope > .pf-slider-prev"), c = t.container.querySelector(":scope > .pf-slider-next"), d = t.slides.length;
        (e == null ? void 0 : e.navStyle) !== "none" && updateNavigationButtonsState(t, e, n), c.addEventListener("click", function(l) {
            if (l.stopPropagation(), !l.detail || l.detail === 1)
                if (t.current === d || Number(t.current) + Number(a[n]) - 1 === d) o && i !== "none" && updatePaginationButtonsState(t, e, n, 1), o && t.goto(1);
                else {
                    const u = getNextSlideIndex(t, e, n);
                    i !== "none" && updatePaginationButtonsState(t, e, n, u), t.goto(u)
                }
        }), s.addEventListener("click", function(l) {
            if (l.stopPropagation(), !l.detail || l.detail === 1)
                if (t.current === 1) {
                    if (o) {
                        const u = d - a[n] + 1;
                        i !== "none" && updatePaginationButtonsState(t, e, n, u), t.goto(u)
                    }
                } else {
                    let u = t.current - r[n];
                    u < 1 && (u = 1), i !== "none" && updatePaginationButtonsState(t, e, n, u), t.goto(u)
                }
        })
    }

    function updatePaginationButtonsState(t, e, n, a) {
        const r = getActivePagination(t, e, n, a),
            o = t.container.querySelectorAll(":scope > .pf-slider-nav button"),
            i = Math.min(r, o.length - 1);
        o.forEach((s, c) => {
            c === i ? s.classList.add("active") : s.classList.remove("active")
        })
    }

    function handlePaginationButtons(t, e, n) {
        const a = t.container.querySelector(":scope > .pf-slider-nav"),
            r = a == null ? void 0 : a.querySelectorAll("button");
        (e == null ? void 0 : e.paginationStyle) !== "none" && updatePaginationButtonsState(t, e, n), r == null || r.forEach((o, i) => {
            o.onclick = function(s) {
                s.stopPropagation(), t.goto(i * (e == null ? void 0 : e.slidesToScroll[n]) + 1), r.forEach(c => c.classList.remove("active")), o.classList.add("active")
            }
        })
    }

    function updatePaginationButtonsWithNumberOfVariantsRemainingState(t) {
        var y;
        const e = (y = t == null ? void 0 : t.slides) == null ? void 0 : y.length,
            n = t.container.querySelector(":scope > .pf-slider-nav-with-number-left");
        if (!n) return;
        const a = n == null ? void 0 : n.querySelectorAll(".pagination-button"),
            r = n == null ? void 0 : n.querySelector(".prev-button"),
            o = n == null ? void 0 : n.querySelector(".next-button"),
            i = n == null ? void 0 : n.querySelector(".first-media-pagination-button"),
            s = n == null ? void 0 : n.querySelector(".last-media-pagination-button"),
            c = +r.querySelector(".number-media-prev").innerHTML,
            d = t.current === 1 ? -1 : t.current === e ? numberOfVisiblePaginationItemInNewLayout : Array.from(a).findIndex(p => p.classList.contains("active")),
            l = c + d,
            u = t.current - l - 1 + d,
            f = p => {
                a.forEach((S, T) => {
                    S.classList.toggle("active", T === p)
                })
            },
            h = (p, S) => {
                r.querySelector(".number-media-prev").innerHTML = p, o.querySelector(".number-media-next").innerHTML = S
            },
            v = (p, S, T) => {
                p.classList.toggle(S, T)
            };
        u > numberOfVisiblePaginationItemInNewLayout - 1 ? (f(numberOfVisiblePaginationItemInNewLayout - 1), t.current !== e ? h(t.current - numberOfVisiblePaginationItemInNewLayout, e - t.current) : h(e - numberOfVisiblePaginationItemInNewLayout - 1, 1)) : u < 0 ? (f(0), t.current !== 1 ? h(t.current - 1, e - t.current - numberOfVisiblePaginationItemInNewLayout + 1) : h(1, e - numberOfVisiblePaginationItemInNewLayout - 1)) : f(u), t.current !== 1 && t.current !== e ? (r.classList.remove("disabled"), o.classList.remove("disabled"), i.classList.add("disabled"), s.classList.add("disabled")) : (a.forEach(p => p.classList.remove("active")), v(r, "disabled", t.current === 1), v(o, "disabled", t.current === e), v(i, "disabled", t.current === e), v(s, "disabled", t.current === 1), v(i, "active", t.current === 1), v(s, "active", t.current === e))
    }

    function handlePaginationButtonsWithNumberOfVariantsRemaining(t, e, n) {
        var u;
        const a = (u = t == null ? void 0 : t.slides) == null ? void 0 : u.length,
            r = t.container.querySelector(":scope > .pf-slider-nav-with-number-left");
        if (!r) return;
        const o = r == null ? void 0 : r.querySelectorAll(".pagination-button"),
            i = r == null ? void 0 : r.querySelector(".prev-button"),
            s = r == null ? void 0 : r.querySelector(".next-button"),
            c = r == null ? void 0 : r.querySelector(".first-media-pagination-button"),
            d = r == null ? void 0 : r.querySelector(".last-media-pagination-button"),
            l = getActivePagination(t, e, n);
        l === 0 && (i.classList.add("disabled"), i.querySelector(".number-media-prev").innerHTML = 1, c.classList.remove("disabled"), c.classList.add("active")), l === a - 1 && (s.classList.add("disabled"), s.querySelector(".number-media-next").innerHTML = 1, d.classList.remove("disabled"), d.classList.add("active")), i.onclick = function(f) {
            f.stopPropagation(), t.goto(t.current - 1)
        }, s.onclick = function(f) {
            f.stopPropagation(), t.goto(t.current + 1)
        }, o == null || o.forEach((f, h) => {
            [1, 2].includes(l) && h === l - 1 || l >= 3 && l <= a - 4 && h === 2 || l === a - 3 && h === 3 || l === a - 2 && h === 4 ? f.classList.add("active") : f.classList.remove("active"), f.onclick = function(v) {
                v.stopPropagation();
                const y = t.current === 1 ? -1 : t.current === a ? numberOfVisiblePaginationItemInNewLayout : Array.from(o).findIndex(p => p.classList.contains("active"));
                t.goto(t.current + h - y)
            }
        })
    }

    function updateNavigationButtonsState(t, e, n) {
        var a, r;
        try {
            const o = getTotalPaginationButtons(t, e, n),
                i = getActivePagination(t, e, n),
                s = t.container.querySelector(":scope > .pf-slider-prev"),
                c = t.container.querySelector(":scope > .pf-slider-next");
            if (!s || !c) return;
            if (!(e != null && e.loop)) {
                if (((a = t == null ? void 0 : t.slides) == null ? void 0 : a.length) <= ((r = e == null ? void 0 : e.slidesToShow) == null ? void 0 : r[n])) {
                    c.style.visibility = "hidden", s.style.visibility = "hidden";
                    return
                }
                i >= o - 1 ? (c.style.visibility = "hidden", s.style.visibility = "") : i === 0 ? (c.style.visibility = "", s.style.visibility = "hidden") : (c.style.visibility = "", s.style.visibility = "")
            }
        } catch (o) {
            console.error("updateNavigationButtonsState:", o)
        }
    }
    const resizeSlideObserver$1 = (t, e, n) => {
        const a = new ResizeObserver(() => {
                !(e != null && e.maxHeight) && updateSliderHeight(t, e, n)
            }),
            r = t.querySelectorAll('div[data-pf-type="Row"]');
        r == null || r.forEach(o => a.observe(o))
    };

    function initVisibleObservers(t) {
        const {
            container: e,
            slides: n
        } = t, a = new IntersectionObserver((r, o) => {
            r.forEach(i => {
                updateVisibleClasses(i), handleAutoPauseVideo(i)
            })
        }, {
            root: e,
            threshold: .9
        });
        n.forEach(r => a.observe(r))
    }

    function updateVisibleClasses(t) {
        const e = t.target;
        t.isIntersecting ? e.classList.add("is-visible") : e.classList.remove("is-visible")
    }

    function handleAutoPauseVideo(t) {
        const e = t.target;
        if (!t.isIntersecting) {
            const n = e.querySelector("video"),
                a = e.querySelector("iframe");
            n && n.pause(), a && a.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', YOUTUBE_ORIGIN)
        }
    }

    function handleAutoPlay$1(t, e, n) {
        let a;
        const {
            slides: r
        } = t, o = r.length, {
            autoPlayDelay: i,
            pauseOnHover: s,
            slidesToScroll: c,
            slidesToShow: d,
            loop: l
        } = e, u = () => {
            a = setInterval(() => {
                const f = getCurrentIndex(t, e, n);
                let h = f - 1 + Number(c[n]);
                l && (f === o || f + Number(d[n]) > o) && (h = 0);
                const {
                    top: v,
                    left: y
                } = t.getScrollOffset(r[h]);
                t.container.scroll({
                    top: v,
                    left: y,
                    behavior: "smooth"
                })
            }, i)
        };
        u(), s && (t.container.addEventListener("mouseover", function() {
            a && (clearInterval(a), a = null)
        }), t.container.addEventListener("mouseleave", function() {
            u()
        }))
    }
    const isTouchDevice = window.innerWidth < 1025,
        sliderList$1 = window.sliderList = {},
        maximumQuantityToUseOldLayoutPagination = 7,
        ACCEPT_UPDATE_VARIANT_BY_IMAGE = "accept-update-variant-by-image",
        handleReplaceTargetMediaToOriginalMedia = t => {
            var r;
            const e = t == null ? void 0 : t.querySelector("template");
            if (!e) return;
            const n = e.content;
            t == null || t.replaceChild(n.cloneNode(!0), t == null ? void 0 : t.firstElementChild);
            const a = (r = t == null ? void 0 : t.firstElementChild) == null ? void 0 : r.querySelector("video");
            if (a) {
                const o = a.poster;
                a.poster = o
            }
            e.remove()
        };
    async function handleShopifyProductMedia2(t) {
        const e = getDevice(),
            n = (t || document).querySelectorAll('[data-pf-type="ProductMedia2"]');
        if (window.SnapSlider) {
            for (const a of n) {
                const r = getProductMediaId2(a),
                    o = a.querySelector(".product-media2-inner");
                if (!isElementInsideHiddenTabs(a)) {
                    const i = a.querySelector('[data-pf-type*="MediaMain"]'),
                        s = a.querySelector('[data-pf-type="MediaList2"]'),
                        c = a.querySelector('[data-pf-type*="MediaMain"] .pf-media-slider'),
                        d = a.querySelector('[data-pf-type="MediaList2"] .pf-media-slider'),
                        l = getFrontEndSettings(i),
                        u = getFrontEndSettings(s),
                        {
                            navStyle: f,
                            paginationStyle: h
                        } = l,
                        {
                            navStyle: v,
                            listLayout: y = {}
                        } = u,
                        p = y[e] === LIST_LAYOUT.SLIDE;
                    c.querySelectorAll(".pf-slide-main-media");
                    const S = getIndexOfUserDefaultSource(a);
                    S === 0 && o.classList.remove("product-media-loading"), handleReplaceTargetMediaToOriginalMedia(c);
                    const T = new window.SnapSlider(c, {
                            id: c.getAttribute("data-id"),
                            slides: ".pf-slide-main-media",
                            start: S,
                            on: {
                                load: w => {
                                    handleAddStyleScrollSnapType(w), initVisibleObservers(w), handleSlidesScrollStop(w, l, e), handleHoverMedia$1(w, i, l), handleOpenMediaGallery(w, l, a), handleNavigationButtons(w, l, e, !1, sliderList$1), handlePaginationButtons(w, l, e), ["pagination-style-2", "pagination-style-3"].includes(h) && w.slides.length > maximumQuantityToUseOldLayoutPagination && handlePaginationButtonsWithNumberOfVariantsRemaining(w, l, e), handleClickMediaMain(w), updateActiveSlide(w), handleScrollToDefaultVariant(w, sliderList$1, S, l)
                                },
                                "scroll.end": w => {
                                    updateActiveSlide(w, I), handleChangeMainMedia(w, a), f !== "none" && updateNavigationButtonsState(w, l, e), h !== "none" && updatePaginationButtonsState(w, l, e), ["pagination-style-2", "pagination-style-3"].includes(h) && w.slides.length > maximumQuantityToUseOldLayoutPagination && updatePaginationButtonsWithNumberOfVariantsRemainingState(w), v !== "none" && p && updateNavigationButtonsState(I, u, e), o.classList.remove("product-media-loading")
                                }
                            }
                        }),
                        I = new window.SnapSlider(d, {
                            id: d.getAttribute("data-id"),
                            slides: ".pf-slide-list-media",
                            start: S,
                            on: {
                                load: w => {
                                    p && handleAddStyleScrollSnapType(w), p && initVisibleObservers(w), p && handleSlidesScrollStop(w, u, e), p && handleNavigationButtons(T, u, e, !0, w), handleClickOnSliderMode(w, l, u, T, e), updateActiveSlide(w), handleScrollToDefaultVariant(T, w, S, l)
                                },
                                "scroll.end": w => {
                                    v !== "none" && p && updateNavigationButtonsState(w, u, e), o.classList.remove("product-media-loading")
                                }
                            }
                        });
                    window.mainSlider2[r] = T
                }
            }
            shouldLoadShopifyXR() && loadShopifyXr()
        }
    }

    function handleClickOnSliderMode(t, e, n, a, r) {
        const o = e == null ? void 0 : e.disableSlideshow;
        t == null || t.slides.forEach((i, s) => {
            i.addEventListener("mousedown", c => {
                var u, f;
                c.stopPropagation(), (n == null ? void 0 : n.paginationStyle) !== "none" && updatePaginationButtonsState(a, n, r, s + 1), (u = t.slides.find(h => h.getAttribute("data-active"))) == null || u.removeAttribute("data-active"), t.slides[s].setAttribute("data-active", !0);
                const d = n.navStyle !== "none",
                    l = ((f = n.listLayout) == null ? void 0 : f[r]) === LIST_LAYOUT.SLIDE;
                d && l && updateNavigationButtonsState(t, n, r), o ? updateMainMediaWhenTurnOffSlideshow2(a, t, s, !1) : a.goto(s + 1)
            })
        })
    }

    function handleFindModelOrVideo$1(t) {
        return t.find(n => n.classList.contains("is-current")).querySelector(".pf-media-wrapper")
    }

    function handleMagnifierMedia$1(t) {
        const {
            slides: e
        } = t;
        e.forEach(n => {
            n.getAttribute("data-media-type") === "image" && initZoomImage2(n)
        })
    }
    let moved = !1;

    function changeProductMediaOnly$1(t, e, n) {
        if (e !== n) {
            const a = t[e].querySelector("img"),
                r = t[n].querySelector("img");
            a && r && (moved = !0, t[e].appendChild(r), t[n].appendChild(a))
        }
    }

    function handleHoverMedia$1(t, e, n) {
        const {
            slides: a
        } = t;
        if (isTouchDevice || n.hoverAction === HOVER_ACTION.NONE) return;
        let r = t.current - 1;
        const o = (i, s) => i === s ? 0 : i + 1;
        e.onmouseenter = function() {
            if (moved) return;
            const i = t.current - 1;
            let s = i,
                c = i;
            const d = a.length - 1;
            if (n.hoverAction === HOVER_ACTION.HOVER && a.length > 1 && !handleFindModelOrVideo$1(a)) switch (n.onHover) {
                case ON_HOVER.NEXT_IMAGE:
                    for (c = i < d ? i + 1 : 0; a[c].getAttribute("data-media-type") !== "image" || s === c;) c = c < d ? c + 1 : 0;
                    changeProductMediaOnly$1(a, i, c), s = c;
                    break;
                case ON_HOVER.LAST_IMAGE:
                    for (c = d;
                        (a[c].getAttribute("data-media-type") !== "image" || c === 0) && (c = c === i ? c - 2 : c - 1, !(c < 0)););
                    changeProductMediaOnly$1(a, i, c), s = c;
                    break;
                case ON_HOVER.RANDOM_IMAGE:
                    do c = Math.floor(Math.random() * a.length); while (a[c].getAttribute("data-media-type") !== "image" || s === c);
                    changeProductMediaOnly$1(a, i, c), s = c;
                    break;
                case ON_HOVER.ALL_IMAGE:
                    c = o(r, d);
                    let u = 0;
                    for (;
                        (c === i || a[c].getAttribute("data-media-type") !== "image") && (c = o(c, d), u++, u !== a.length););
                    changeProductMediaOnly$1(a, i, c), r = c;
                    break
            } else n.hoverAction === HOVER_ACTION.MAGNIFIER && handleMagnifierMedia$1(t);
            e.onmouseleave = function() {
                n.hoverAction === HOVER_ACTION.HOVER && (n.onHover === ON_HOVER.ALL_IMAGE ? changeProductMediaOnly$1(a, r, i) : changeProductMediaOnly$1(a, s, i), moved = !1)
            }
        }
    }
    let firstLoading = !1;
    const YOUTUBE_ORIGIN = "https://www.youtube.com",
        VIMEO_ORIGIN = "https://player.vimeo.com",
        mainSlider = window.mainSlider = {},
        subSlider = window.subSlider = {};
    window.mediaGallery = {};
    let activeVideo;

    function getProductMediaId(t) {
        const e = t == null ? void 0 : t.closest('[data-pf-type="ProductMedia"]');
        return `${getElemIdByClassname(e==null?void 0:e.className)+e.getAttribute("data-product-id")}_${e.getAttribute("data-media-id")}`
    }

    function isElementInsideHiddenTabs(t) {
        if (t.closest('[data-pf-type="Tabs"]')) {
            let e = t.parentElement;
            for (; e;) {
                const {
                    display: n
                } = getComputedStyle(e);
                if (n === "none") return !0;
                if (e.dataset.pfType === "Tabs") return !1;
                e = e.parentElement
            }
            return !1
        }
    }
    async function handleShopifyProductMedia(t) {
        let e;
        t ? e = t.querySelectorAll('[data-pf-type="ProductMedia"]') : e = document.querySelectorAll('[data-pf-type="ProductMedia"]');
        for (const n of e) {
            const a = getProductMediaId(n);
            isElementInsideHiddenTabs(n) || await initSlider(n, (r, o, i, s) => {
                i && handleUpdateImageHeight(n, i), handleChangeMainMedia$1(n, r, o, i), handleClickMediaItem(n, o, i, s).catch(c => console.log(c)), handleHoverMedia(n, r, o), handleOpenMediaGallery$1(n, o), window.mainSlider[a] = o, window.subSlider[a] = i, handleDefaultSource(n), i && handleShowArrow(n)
            })
        }
        shouldLoadShopifyXR() && loadShopifyXr()
    }

    function shouldLoadShopifyXR() {
        const t = ["tablet", "mobile"].includes(getDevice()),
            e = document.querySelectorAll(".pf-ar-btn-wrapper");
        return !t || !e.length || !checkARCompatible(getMobileOS()) ? !1 : (e.forEach(a => {
            a.classList.add("pf-ar-compatible")
        }), !0)
    }

    function loadShopifyXr() {
        function t() {
            if (!window.ShopifyXR) document.addEventListener("shopify_xr_initialized", function() {
                t()
            });
            else {
                const e = [];
                document.querySelectorAll('.pf-ar-btn-wrapper.pf-ar-compatible [id^="ModelJSON-"]').forEach(n => {
                    e.push(JSON.parse(n.textContent)), n.remove()
                }), window.ShopifyXR.addModels(e), window.ShopifyXR.setupXRElements()
            }
        }
        window.Shopify.loadFeatures([{
            name: "shopify-xr",
            version: "1.0",
            onLoad: t
        }])
    }

    function handleShowArrow(t) {
        const e = getFrontEndSettings(t),
            n = (e == null ? void 0 : e.limit) || {
                all: 5,
                laptop: 5,
                tablet: 5,
                mobile: 5
            },
            a = getDevice(),
            r = t.querySelector('[data-pf-type="ProductMediaList"]'),
            o = r.querySelector(".splide__arrows");
        r.querySelectorAll(".splide__track .splide__list .splide__slide").length <= n[a] && o.classList.add("pf-hidden")
    }

    function handleUpdateImageHeight(t, e) {
        const n = getFrontEndSettings(t),
            a = (n == null ? void 0 : n.spacing) || {
                all: "10px",
                laptop: "10px",
                tablet: "10px",
                mobile: "10px"
            },
            r = getDevice();
        if (e.Components.Elements.getSlides().length) {
            const i = e.options.perPage,
                c = parseInt(e.Components.Elements.getSlide(0).slide.style.width) - parseInt(a[r]) * (i - 1) / i;
            e.options = { ...e.options,
                fixedWidth: c,
                fixedHeight: c
            }, c && e.emit("updated")
        }
    }

    function handleDefaultSource(t) {
        const e = t.getAttribute("data-product-id"),
            a = pageflyProducts[e].variants[0],
            r = getFrontEndSettings(t),
            o = (r == null ? void 0 : r.imageSource) || "featured",
            i = getProductMediaId(t),
            s = mainSlider[i],
            c = subSlider[i];
        if (o === "variant" && a && (a == null ? void 0 : a.featured_media)) {
            const l = (s == null ? void 0 : s.Components.Elements.getSlides()).find(f => {
                    const h = f.slide.getAttribute("data-media-id"),
                        v = a.featured_media.id.toString();
                    return h === v
                }),
                u = isNaN(l == null ? void 0 : l.index) ? 0 : l.index;
            s.go(u), c && c.go(u)
        } else s.go(0), c && c.go(0)
    }
    async function initSlider(t, e) {
        if (!window.Splide) {
            const i = document.createElement("style");
            document.head.appendChild(i), i.appendChild(document.createTextNode(dataCss)), await loadJS("https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/js/splide.min.js", document.body, !1, !0)
        }
        if (!window.Splide) return;
        const n = t.querySelector('[data-pf-type="MainMedia"] .splide'),
            a = n.querySelector(".splide__pagination");
        a && a.remove();
        const r = t.querySelector('[data-pf-type="ProductMediaList"] > div'),
            o = new window.Splide(n, {
                type: "fade",
                arrows: !1,
                drag: !1,
                keyboard: !1
            });
        if (onMounted(n, o), onPaginationMounted(o), o.mount(), r)
            if (r.getAttribute("data-splide")) {
                const i = new window.Splide(r, {
                    type: "slide",
                    perMove: 1,
                    pagination: !1,
                    drag: !1
                });
                i.on("arrows:mounted", function() {
                    r && r.parentNode.classList.remove("pf-splide-loading")
                }), i.mount(), e(n, o, i, r)
            } else r.parentNode.classList.remove("pf-splide-loading"), e(n, o, null, r);
        else e(n, o)
    }

    function handleOpenMediaGallery$1(t, e) {
        (getFrontEndSettings(t) || {}).clickAction === 2 && e.on("click", a => {
            if (a.slide.getAttribute("data-media-type") === "image") {
                const r = t.getAttribute("data-product-id"),
                    o = pageflyProducts[r].media;
                window.mediaGallery[r] || (window.mediaGallery[r] = new MediaGallery(o, document.body)), window.mediaGallery[r].show(a.index)
            }
        })
    }

    function updateSplideSettings(t, e) {
        isTouchDevice && (t.options = { ...t.options,
            ...e
        }, t.emit("updated"), console.log("splide update", t.options))
    }

    function togglePlayExternalVideo(t, e, n) {
        const a = {
            method: t
        };
        n === "vimeo" ? e.contentWindow.postMessage(a, VIMEO_ORIGIN) : t === "play" ? e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', YOUTUBE_ORIGIN) : e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', YOUTUBE_ORIGIN)
    }

    function handleChangeMainMedia$1(t, e, n, a) {
        n.on("move", r => {
            if (isNaN(r) && (r = 0), isTouchDevice) a && a.go(r);
            else {
                const o = e == null ? void 0 : e.parentNode.querySelector('[data-pf-type="ProductMediaList"]');
                if (!o) return;
                const i = Array.from(o == null ? void 0 : o.querySelectorAll('[data-pf-type="MediaItem"]'));
                setActiveItemOnGridMode(r, i)
            }
        }), n.on("moved", r => {
            var c;
            isNaN(r) && (r = 0);
            const o = n.Components.Elements.getSlide(r),
                i = o == null ? void 0 : o.slide.getAttribute("data-media-type");
            if (n && e && firstLoading && setDynamicHeight(n, e, r), firstLoading = !0, ((c = t == null ? void 0 : t.className) == null ? void 0 : c.includes(ACCEPT_UPDATE_VARIANT_BY_IMAGE)) && (!n.root.getAttribute("data-no-move-again") && updateVariantByImage(t, o), n.root.removeAttribute("data-no-move-again")), i === "model") {
                const d = o.slide.getAttribute("data-media-id");
                updateARButton(t, d), showARButton(t)
            } else hideARButton(t);
            if (i === "model" && !isTouchDevice) o.slide.querySelector(".pf-mask").classList.add("pf-hidden");
            else if (i === "external_video") activeVideo = o.slide;
            else {
                if (activeVideo) {
                    const d = activeVideo.querySelector(".pf-media-wrapper"),
                        l = d.querySelector("iframe"),
                        u = d.getAttribute("data-video-host");
                    togglePlayExternalVideo("pause", l, u)
                }
                if (n.options.drag) return;
                updateSplideSettings(n, {
                    drag: !0
                })
            }
        }), n.on("click", r => {
            const o = r.slide.getAttribute("data-media-type");
            if (o === "model" && isTouchDevice) {
                const i = r.slide.querySelector(".pf-mask");
                n.options.drag ? i.classList.add("pf-hidden") : i.classList.remove("pf-hidden"), updateSplideSettings(n, {
                    drag: !n.options.drag
                })
            } else if (o === "external_video") {
                const i = r.slide.querySelector(".pf-media-wrapper"),
                    s = i.querySelector("iframe"),
                    c = i.querySelector(".pf-mask-iframe"),
                    d = i.getAttribute("data-video-host");
                c.getAttribute("data-play") === "false" ? (c.setAttribute("data-play", "true"), togglePlayExternalVideo("play", s, d)) : (c.setAttribute("data-play", "false"), togglePlayExternalVideo("pause", s, d))
            } else {
                if (n.options.drag) return;
                updateSplideSettings(n, {
                    drag: !0
                })
            }
        })
    }

    function setDynamicHeight(t, e, n) {
        const a = t.Components.Elements.getSlide(n),
            r = (a == null ? void 0 : a.slide) || e.querySelector(".splide__slide.is-active"),
            o = getDevice(),
            i = {
                all: "pf-lg-media-fixed-height",
                laptop: "pf-md-media-fixed-height",
                tablet: "pf-sm-media-fixed-height",
                mobile: "pf-media-fixed-height"
            };
        if (!e.closest('[data-pf-type="MainMedia"]').classList.contains(i[o])) {
            const c = r.getBoundingClientRect().height,
                d = t.Components.Elements.list;
            d.style.height = `${c}px`, d.style.transition = "height 0.5s ease"
        }
    }

    function onMounted(t, e) {
        e.on("mounted", () => {
            const n = e.Components.Elements.getSlide(e.index);
            isTouchDevice ? updateSplideSettings(e, {
                drag: !0
            }) : n.slide.getAttribute("data-media-type") === "model" && n.slide.querySelector(".pf-mask").classList.add("pf-hidden"), t.parentNode.style.removeProperty("--ratio"), t.parentNode.classList.remove("pf-splide-loading")
        })
    }

    function onPaginationMounted(t) {
        t.on("pagination:mounted", e => {
            e.items.length === 1 && (e.list.style.visibility = "hidden"), (e.list.querySelectorAll("li") || []).forEach(a => {
                a.addEventListener("click", function(r) {
                    r.stopPropagation()
                })
            })
        })
    }
    const setActiveItemOnGridMode = (t, e) => {
        !e || !e.length || e.forEach((n, a) => {
            t !== a ? n.removeAttribute("data-active") : n.setAttribute("data-active", "true")
        })
    };
    async function handleClickMediaItem(t, e, n, a) {
        !n && a ? (() => {
            Array.from(a == null ? void 0 : a.querySelectorAll('[data-pf-type="MediaItem"]')).forEach((s, c) => {
                s.addEventListener("click", () => {
                    e.go(c)
                })
            })
        })() : (() => {
            !n || (n.on("inactive", i => {
                i.slide.removeAttribute("data-active")
            }), n.on("click", i => {
                var c, d, l;
                const s = e == null ? void 0 : e.index;
                (l = (d = (c = n == null ? void 0 : n.Components) == null ? void 0 : c.Elements) == null ? void 0 : d.slides[s]) == null || l.removeAttribute("data-active"), i.slide.setAttribute("data-active", "true"), e.go(i.index), n.go(i.index)
            }), n.on("move", i => {
                e.go(i), n.go(i);
                const s = n.Components.Elements.getSlide(i);
                s == null || s.slide.setAttribute("data-active", "true")
            }))
        })()
    }

    function handleFindModelOrVideo(t) {
        return t.Components.Elements.track.querySelector(".is-active").querySelector(".pf-media-wrapper")
    }

    function handleMagnifierMedia(t, e) {
        (getFrontEndSettings(t) || {}).hoverAction === 1 && e.Components.Elements.slides.forEach(r => {
            r.getAttribute("data-media-type") === "image" && initZoomImage2(r)
        })
    }

    function changeProductMediaOnly(t, e, n) {
        t[e].classList.remove("is-active", "is-visible"), t[n].classList.add("is-active", "is-visible")
    }
    let defaultIndexActive;

    function handleHoverMedia(t, e, n) {
        const a = getFrontEndSettings(t) || {},
            r = [];
        if (e.querySelectorAll(".splide__slide").forEach((s, c) => {
                s.getAttribute("data-media-type") === "image" && r.push(c)
            }), isTouchDevice || a.hoverAction === 0) return;
        let o = n.index;
        const i = (s, c) => s === c ? 0 : s + 1;
        e.onmouseenter = function() {
            const s = e.querySelectorAll(".splide__slide");
            defaultIndexActive = n.index;
            let c = defaultIndexActive;
            const d = r.length - 1;
            if (a.hoverAction === 2 && r.length > 1) {
                if (handleFindModelOrVideo(n)) return;
                a.onHover === 0 ? (c = r.indexOf(defaultIndexActive) + 1 <= d ? r.indexOf(defaultIndexActive) + 1 : 0, changeProductMediaOnly(s, o, r[c])) : a.onHover === 1 ? r.includes(defaultIndexActive) && (c = r.indexOf(defaultIndexActive), changeProductMediaOnly(s, o, r[c === 0 ? d : c - 1])) : a.onHover === 2 ? (c = Math.floor(Math.random() * r.length), changeProductMediaOnly(s, o, r[c])) : (c = i(o, d), c === defaultIndexActive && (c = i(c, d)), changeProductMediaOnly(s, n.index, r[c]), o = c)
            } else handleMagnifierMedia(t, n);
            e.onmouseleave = function() {
                a.hoverAction === 2 && (a.onHover === 1 ? changeProductMediaOnly(s, r[c === 0 ? d : c - 1], o) : changeProductMediaOnly(s, r[c], n.index))
            }
        }
    }
    const updateImageByVariant = (t, e) => {
            var o, i;
            const n = mainSlider[t],
                a = subSlider[t],
                r = (o = e == null ? void 0 : e.featured_media) == null ? void 0 : o.id;
            if (!!r && n) {
                const c = (n == null ? void 0 : n.Components.Elements.getSlides()).find(l => l.slide.getAttribute("data-media-id") === r.toString()),
                    d = c == null ? void 0 : c.index;
                isNaN(d) || ((i = n.root) != null && i.closest(`.${ACCEPT_UPDATE_VARIANT_BY_IMAGE}`) && n.root.setAttribute("data-no-move-again", "true"), n.go(d), a && a.go(d))
            }
        },
        updateVariantByImage = (t, e) => {
            var u, f, h, v;
            const n = parseInt(t.getAttribute("data-product-id")),
                a = t.closest('[data-pf-type="ProductBox"]'),
                r = a && a.className,
                o = getElemIdByClassname(r),
                i = pageflyProducts[n],
                s = (f = (u = i == null ? void 0 : i.pfCurrentVariant) == null ? void 0 : u[o || OUTSIDE_BOX_KEY]) == null ? void 0 : f.id,
                c = (i == null ? void 0 : i.variants) || [],
                d = (v = (h = e == null ? void 0 : e.slide) == null ? void 0 : h.dataset) == null ? void 0 : v.mediaId,
                l = c.find(y => {
                    var p;
                    return ((p = y.featured_media) == null ? void 0 : p.id) === d
                });
            s !== (l == null ? void 0 : l.id) && l && updateByCurrentVariant(n, l, r, !1, !0, t)
        },
        updateProductMediaOutsideBox = (t, e) => {
            t != null && t.length && t.forEach(n => {
                const a = getProductMediaId(n);
                updateImageByVariant(a, e)
            })
        },
        updateARButton = (t, e) => {
            const n = t.querySelector(".pf-ar-btn");
            n == null || n.setAttribute("data-shopify-model3d-id", e)
        },
        showARButton = t => {
            const e = t == null ? void 0 : t.querySelector(".pf-ar-btn-wrapper");
            e && e.classList.contains("pf-ar-compatible") && e.classList.remove("pf-ar-btn-hidden")
        },
        hideARButton = t => {
            const e = t == null ? void 0 : t.querySelector(".pf-ar-btn-wrapper");
            e && e.classList.add("pf-ar-btn-hidden")
        };

    function handleChangeMainMedia(t, e) {
        var i;
        const n = t.current - 1,
            a = t.slides[n],
            r = a.getAttribute("data-media-type");
        if ((i = e == null ? void 0 : e.className) == null ? void 0 : i.includes(ACCEPT_UPDATE_VARIANT_BY_IMAGE)) {
            const s = {
                slide: {
                    dataset: {
                        mediaId: a == null ? void 0 : a.getAttribute("data-media-id")
                    }
                }
            };
            !t.container.getAttribute("data-no-move-again") && updateVariantByImage(e, s), t.container.removeAttribute("data-no-move-again")
        }
        if (r === "model") {
            const s = a.getAttribute("data-media-id");
            updateARButton(e, s), showARButton(e), isTouchDevice || a.querySelector(".pf-mask").classList.add("pf-hidden")
        } else hideARButton(e);
        if (r === "external_video") {
            const s = a.querySelector(".pf-media-wrapper"),
                c = s.querySelector("iframe"),
                d = s.getAttribute("data-video-host");
            togglePlayExternalVideo("pause", c, d)
        }
    }

    function handleClickMediaMain(t) {
        const {
            slides: e
        } = t;
        e.forEach(n => {
            n.registeredClickEvent || (n.registeredClickEvent = !0, n.addEventListener("click", () => {
                const a = n.getAttribute("data-media-type");
                if (a === "model" && isTouchDevice) {
                    const r = n.querySelector(".pf-mask");
                    r.classList.contains("pf-hidden") ? r.classList.remove("pf-hidden") : r.classList.add("pf-hidden")
                } else if (a === "external_video") {
                    const r = n.querySelector(".pf-media-wrapper"),
                        o = r.querySelector("iframe"),
                        i = r.querySelector(".pf-mask-iframe"),
                        s = r.getAttribute("data-video-host");
                    i.getAttribute("data-play") === "false" ? (i.setAttribute("data-play", "true"), togglePlayExternalVideo("play", o, s)) : (i.setAttribute("data-play", "false"), togglePlayExternalVideo("pause", o, s))
                }
            }))
        })
    }

    function handleNavigationButtons(t, e, n, a = !1, r) {
        var d;
        const o = a ? r == null ? void 0 : r.container : t == null ? void 0 : t.container,
            i = o.querySelector(".pf-slider-prev"),
            s = o.querySelector(".pf-slider-next"),
            {
                disableSlideshow: c
            } = getFrontEndSettings((d = t.container) == null ? void 0 : d.closest('[data-pf-type*="MediaMain"]')) || {};
        (e == null ? void 0 : e.navStyle) !== "none" && updateNavigationButtonsState(a ? r : t, e, n), s == null || s.addEventListener("click", l => {
            if (l.stopPropagation(), !l.detail || l.detail === 1)
                if (c && a && r) {
                    const {
                        slides: u
                    } = r, f = u.length;
                    let h = u.findIndex(v => v.getAttribute("data-active")) + (e == null ? void 0 : e.slidesToScroll[n]);
                    h >= f && (h = f - 1), updateMainMediaWhenTurnOffSlideshow2(t, r, h, !0)
                } else {
                    const u = t.slides.length;
                    if (t.current < u || !l.detail || l.detail === 1) {
                        let f = t.current + (e == null ? void 0 : e.slidesToScroll[n]);
                        f > u && (f = u), (e == null ? void 0 : e.paginationStyle) !== "none" && updatePaginationButtonsState(t, e, n, f), t.goto(f)
                    }
                }
        }), i == null || i.addEventListener("click", l => {
            if (l.stopPropagation(), !l.detail || l.detail === 1) {
                if (c && a && r) {
                    const {
                        slides: u
                    } = r;
                    let f = u.findIndex(h => h.getAttribute("data-active")) - (e == null ? void 0 : e.slidesToScroll[n]);
                    f < 0 && (f = 0), updateMainMediaWhenTurnOffSlideshow2(t, r, f, !0)
                } else if (t.current > 1) {
                    let u = t.current - (e == null ? void 0 : e.slidesToScroll[n]);
                    u < 1 && (u = 1), (e == null ? void 0 : e.paginationStyle) !== "none" && updatePaginationButtonsState(t, e, n, u), t.goto(u)
                }
            }
        })
    }

    function handleOpenMediaGallery(t, e, n) {
        const {
            slides: a
        } = t, r = e == null ? void 0 : e.disableSlideshow;
        (e == null ? void 0 : e.clickAction) === CLICK_ACTION.SHOW_FULLSCREEN && a.forEach((o, i) => {
            o.addEventListener("click", () => {
                if (o.getAttribute("data-media-type") === "image") {
                    const s = n.getAttribute("data-product-id"),
                        c = pageflyProducts[s].media;
                    window.mediaGallery[s] || (window.mediaGallery[s] = new MediaGallery(c, document.body));
                    let d = i;
                    if (r) {
                        const l = o.getAttribute("data-media-id");
                        d = c.findIndex(u => (u == null ? void 0 : u.id) === +l)
                    }
                    window.mediaGallery[s].show(d)
                }
            })
        })
    }

    function handleOriginalRatioMainMediaStyleWhenTurnOffSlideshow2(t, e) {
        var a, r;
        if (getCurrentRatio(e.ratio) === "original") {
            const o = t.container,
                i = o.querySelector(".variant-image"),
                s = o.querySelector(".pf-media-wrapper"),
                c = (a = o == null ? void 0 : o.closest('[data-pf-type="ProductMedia2"]')) == null ? void 0 : a.getAttribute("data-product-id"),
                d = (r = pageflyProducts[c]) == null ? void 0 : r.media,
                l = d == null ? void 0 : d[0];
            l && (i.style.aspectRatio = l.preview_image.aspect_ratio, i.style.objectFit = "contain", i.style.objectPosition = "center top", s.style.paddingBottom = `${100/l.preview_image.aspect_ratio}%`)
        }
    }

    function handleScrollToDefaultVariant(t, e, n, a) {
        a.disableSlideshow && (handleOriginalRatioMainMediaStyleWhenTurnOffSlideshow2(t, a), n > 0 && updateMainMediaWhenTurnOffSlideshow2(t, e, n - 1, !0))
    }

    function updateActiveSlide(t, e) {
        const {
            slides: n
        } = t, {
            slides: a
        } = e || {};
        n == null || n.forEach((r, o) => {
            r.classList.contains("is-current") ? (r.setAttribute("data-active", !0), a && (a[o].setAttribute("data-active", !0), a[o].classList.contains("is-visible") || e.goto(o + 1))) : (r.removeAttribute("data-active"), a && a[o].removeAttribute("data-active"))
        })
    }
    const mainSlider2 = window.mainSlider2 = {},
        sliderList = window.sliderList = {};

    function updateImageByVariant2(t, e) {
        var o, i, s, c, d;
        const n = mainSlider2[t],
            a = sliderList[t],
            r = (o = e == null ? void 0 : e.featured_media) == null ? void 0 : o.id;
        if (!!r && n) {
            const l = getFrontEndSettings((i = n.container) == null ? void 0 : i.closest('[data-pf-type*="MediaMain"]')),
                {
                    disableSlideshow: u
                } = l || {};
            if (u) {
                const f = (c = (s = n.container) == null ? void 0 : s.closest('[data-pf-type="ProductMedia2"]')) == null ? void 0 : c.getAttribute("data-product-id"),
                    v = pageflyProducts[f].media.findIndex(y => y.id === r);
                updateMainMediaWhenTurnOffSlideshow2(n, a, v, !0)
            } else {
                const {
                    slides: f,
                    current: h
                } = n, v = f.findIndex(y => y.getAttribute("data-media-id") === r.toString()) + 1;
                !isNaN(v) && Number(v) !== Number(h) && ((d = n.container) != null && d.closest(`.${ACCEPT_UPDATE_VARIANT_BY_IMAGE}`) && n.container.setAttribute("data-no-move-again", "true"), n.goto(v))
            }
        }
    }

    function updateMainMediaWhenTurnOffSlideshow2(t, e, n, a = !1) {
        var u, f, h, v, y;
        a && e && (e == null ? void 0 : e.slides) && (e.slides.forEach((p, S) => {
            const T = p.getAttribute("data-active") === "true";
            S === n && !T ? p.setAttribute("data-active", !0) : S !== n && T && p.removeAttribute("data-active")
        }), e.goto(n + 1));
        const r = t.container,
            o = r.querySelector(".variant-image"),
            i = r.querySelector(".pf-media-wrapper"),
            s = r.querySelector(".pf-slide-main-media"),
            c = (u = r == null ? void 0 : r.closest('[data-pf-type="ProductMedia2"]')) == null ? void 0 : u.getAttribute("data-product-id"),
            l = pageflyProducts[c].media[n];
        if (s.setAttribute("data-media-id", l.id), s.setAttribute("data-media-type", l.media_type), l.media_type === "image") {
            if (!o.src.includes(l.src)) {
                const p = (f = o.src) != null && f.includes("https") ? (h = o.src) == null ? void 0 : h.split("https:")[1] : o.src;
                o.alt = l.alt, o.width = l.width, o.height = l.height, o.srcset = (y = o.srcset) == null ? void 0 : y.replaceAll((v = p == null ? void 0 : p.split("width")) == null ? void 0 : v[0], l.src), o.src = l.src
            }
            i.style.display = "none", o.style.display = "block"
        } else switch (o.style.display = "none", i.style.display = "block", i.innerHTML = "", l.media_type) {
            case "model":
                const p = l.sources[0].url,
                    S = l.preview_image.src;
                p && loadModelViewer(i, p, S, l.alt);
                break;
            case "video":
                const T = l.sources[0].url;
                T && loadVideo(i, T);
                break;
            case "external_video":
                const {
                    host: I,
                    external_id: w
                } = l;
                I && w && loadExternalVideo(i, I, w);
                break
        }
    }

    function updateProductMediaOutsideBox2(t, e) {
        t != null && t.length && t.forEach(n => {
            const a = getProductMediaId2(n);
            updateImageByVariant2(a, e)
        })
    }

    function handleBackInStockBySureSwift(t) {
        var a, r;
        const e = window.__pageflyProducts,
            n = document.querySelector('[data-pf-type="BackInStock"]');
        if (n !== null) {
            const i = n.closest("form").getAttribute("data-productid"),
                s = (a = e[i]) == null ? void 0 : a.quantity.find(l => l.includes(t == null ? void 0 : t.id)),
                c = t && s.split(`${t.id}:`)[1],
                d = (r = window.BISConfig) == null ? void 0 : r.instock_qty_level;
            !(t != null && t.available) || d > c ? n.style.display = "block" : n.style.display = "none"
        }
    }
    async function initBIS() {
        const t = document.querySelector('[data-pf-type="BackInStock"]');
        if (t !== null) {
            const n = t.closest("form").getAttribute("data-productid"),
                r = window.__pageflyProducts[n].selected_or_first_available_variant;
            handleBackInStockBySureSwift(r)
        }
    }
    window.pushowl = window.pushowl || [];
    const setButtonText = (t, e) => {
        t.innerText = e
    };

    function handlePushOwlBackInStock(t) {
        window.pushowl.push(() => {
            window.pushowl.isProductVariantSubscribed("back_in_stock", "")
        });
        const e = document.querySelectorAll('[data-pf-type="PushOwl"].js-pushowl--bis');
        if (e.length > 0) {
            let n = {};
            const a = e[0].getAttribute("data-product-id"),
                r = pageflyProducts[a];
            if (!t) n = r.variants[0];
            else {
                const o = r.variants.find(i => i.id === t);
                o ? n = o : n = r.selected_or_first_available_variant || r.variants[0]
            }
            console.log(n), e.forEach(o => {
                const i = getFrontEndSettings(o);
                n.available ? (console.log("hide bis", o), o.style.display = "none") : window.pushowl.isProductVariantSubscribed("back_in_stock", n.id) ? i.postDisplay === "none" ? o.style.display = "none" : (setButtonText(o, i.postSubscriptionText), o.style.display = i.postDisplay) : (console.log("show bis"), setButtonText(o, i.btnText), o.style.display = i.preDisplay)
            })
        }
    }

    function handlePushOwlPriceDrop(t) {
        const e = document.querySelectorAll('[data-pf-type="PushOwl"].js-pushowl--pd');
        if (e.length > 0) {
            let n = {};
            const a = e[0].getAttribute("data-product-id"),
                r = pageflyProducts[a];
            if (!t) n = r.variants[0];
            else {
                const o = r.variants.find(i => i.id === t);
                o ? n = o : n = r.selected_or_first_available_variant || r.variants[0]
            }
            e.forEach(o => {
                const i = getFrontEndSettings(o);
                window.pushowl.isProductVariantSubscribed("price_drop", n.id) ? i.postDisplay === "none" ? o.style.display = "none" : (setButtonText(o, i.postSubscriptionText), o.style.display = i.postDisplay) : (setButtonText(o, i.btnText), o.style.display = i.preDisplay)
            })
        }
    }
    async function initPushOwl() {
        const e = new URLSearchParams(window.location.search).get("variant");
        console.log("vvvv", e), setTimeout(() => {
            handlePushOwlPriceDrop(e), handlePushOwlBackInStock(e)
        }, 2e3)
    }

    function toInteger(t) {
        if (t === null || t === !0 || t === !1) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
    }

    function requiredArgs(t, e) {
        if (e.length < t) throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present")
    }

    function toDate(t) {
        requiredArgs(1, arguments);
        var e = Object.prototype.toString.call(t);
        return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN))
    }

    function addMilliseconds(t, e) {
        requiredArgs(2, arguments);
        var n = toDate(t).getTime(),
            a = toInteger(e);
        return new Date(n + a)
    }

    function getTimezoneOffsetInMilliseconds(t) {
        var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
        return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime()
    }

    function isDate(t) {
        return requiredArgs(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]"
    }

    function isValid(t) {
        if (requiredArgs(1, arguments), !isDate(t) && typeof t != "number") return !1;
        var e = toDate(t);
        return !isNaN(Number(e))
    }
    var formatDistanceLocale = {
            lessThanXSeconds: {
                one: "less than a second",
                other: "less than {{count}} seconds"
            },
            xSeconds: {
                one: "1 second",
                other: "{{count}} seconds"
            },
            halfAMinute: "half a minute",
            lessThanXMinutes: {
                one: "less than a minute",
                other: "less than {{count}} minutes"
            },
            xMinutes: {
                one: "1 minute",
                other: "{{count}} minutes"
            },
            aboutXHours: {
                one: "about 1 hour",
                other: "about {{count}} hours"
            },
            xHours: {
                one: "1 hour",
                other: "{{count}} hours"
            },
            xDays: {
                one: "1 day",
                other: "{{count}} days"
            },
            aboutXWeeks: {
                one: "about 1 week",
                other: "about {{count}} weeks"
            },
            xWeeks: {
                one: "1 week",
                other: "{{count}} weeks"
            },
            aboutXMonths: {
                one: "about 1 month",
                other: "about {{count}} months"
            },
            xMonths: {
                one: "1 month",
                other: "{{count}} months"
            },
            aboutXYears: {
                one: "about 1 year",
                other: "about {{count}} years"
            },
            xYears: {
                one: "1 year",
                other: "{{count}} years"
            },
            overXYears: {
                one: "over 1 year",
                other: "over {{count}} years"
            },
            almostXYears: {
                one: "almost 1 year",
                other: "almost {{count}} years"
            }
        },
        formatDistance = function(t, e, n) {
            var a, r = formatDistanceLocale[t];
            return typeof r == "string" ? a = r : e === 1 ? a = r.one : a = r.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + a : a + " ago" : a
        };
    const formatDistance$1 = formatDistance;

    function buildFormatLongFn(t) {
        return function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                n = e.width ? String(e.width) : t.defaultWidth,
                a = t.formats[n] || t.formats[t.defaultWidth];
            return a
        }
    }
    var dateFormats = {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy"
        },
        timeFormats = {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        dateTimeFormats = {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        },
        formatLong = {
            date: buildFormatLongFn({
                formats: dateFormats,
                defaultWidth: "full"
            }),
            time: buildFormatLongFn({
                formats: timeFormats,
                defaultWidth: "full"
            }),
            dateTime: buildFormatLongFn({
                formats: dateTimeFormats,
                defaultWidth: "full"
            })
        };
    const formatLong$1 = formatLong;
    var formatRelativeLocale = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        },
        formatRelative = function(t, e, n, a) {
            return formatRelativeLocale[t]
        };
    const formatRelative$1 = formatRelative;

    function buildLocalizeFn(t) {
        return function(e, n) {
            var a = n || {},
                r = a.context ? String(a.context) : "standalone",
                o;
            if (r === "formatting" && t.formattingValues) {
                var i = t.defaultFormattingWidth || t.defaultWidth,
                    s = a.width ? String(a.width) : i;
                o = t.formattingValues[s] || t.formattingValues[i]
            } else {
                var c = t.defaultWidth,
                    d = a.width ? String(a.width) : t.defaultWidth;
                o = t.values[d] || t.values[c]
            }
            var l = t.argumentCallback ? t.argumentCallback(e) : e;
            return o[l]
        }
    }
    var eraValues = {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"]
        },
        quarterValues = {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        },
        monthValues = {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        dayValues = {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        dayPeriodValues = {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
            }
        },
        formattingDayPeriodValues = {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
            }
        },
        ordinalNumber = function(t, e) {
            var n = Number(t),
                a = n % 100;
            if (a > 20 || a < 10) switch (a % 10) {
                case 1:
                    return n + "st";
                case 2:
                    return n + "nd";
                case 3:
                    return n + "rd"
            }
            return n + "th"
        },
        localize = {
            ordinalNumber,
            era: buildLocalizeFn({
                values: eraValues,
                defaultWidth: "wide"
            }),
            quarter: buildLocalizeFn({
                values: quarterValues,
                defaultWidth: "wide",
                argumentCallback: function(t) {
                    return t - 1
                }
            }),
            month: buildLocalizeFn({
                values: monthValues,
                defaultWidth: "wide"
            }),
            day: buildLocalizeFn({
                values: dayValues,
                defaultWidth: "wide"
            }),
            dayPeriod: buildLocalizeFn({
                values: dayPeriodValues,
                defaultWidth: "wide",
                formattingValues: formattingDayPeriodValues,
                defaultFormattingWidth: "wide"
            })
        };
    const localize$1 = localize;

    function buildMatchFn(t) {
        return function(e) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                a = n.width,
                r = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth],
                o = e.match(r);
            if (!o) return null;
            var i = o[0],
                s = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth],
                c = Array.isArray(s) ? findIndex(s, function(u) {
                    return u.test(i)
                }) : findKey(s, function(u) {
                    return u.test(i)
                }),
                d;
            d = t.valueCallback ? t.valueCallback(c) : c, d = n.valueCallback ? n.valueCallback(d) : d;
            var l = e.slice(i.length);
            return {
                value: d,
                rest: l
            }
        }
    }

    function findKey(t, e) {
        for (var n in t)
            if (t.hasOwnProperty(n) && e(t[n])) return n
    }

    function findIndex(t, e) {
        for (var n = 0; n < t.length; n++)
            if (e(t[n])) return n
    }

    function buildMatchPatternFn(t) {
        return function(e) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                a = e.match(t.matchPattern);
            if (!a) return null;
            var r = a[0],
                o = e.match(t.parsePattern);
            if (!o) return null;
            var i = t.valueCallback ? t.valueCallback(o[0]) : o[0];
            i = n.valueCallback ? n.valueCallback(i) : i;
            var s = e.slice(r.length);
            return {
                value: i,
                rest: s
            }
        }
    }
    var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i,
        parseOrdinalNumberPattern = /\d+/i,
        matchEraPatterns = {
            narrow: /^(b|a)/i,
            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i
        },
        parseEraPatterns = {
            any: [/^b/i, /^(a|c)/i]
        },
        matchQuarterPatterns = {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i
        },
        parseQuarterPatterns = {
            any: [/1/i, /2/i, /3/i, /4/i]
        },
        matchMonthPatterns = {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
        },
        parseMonthPatterns = {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        matchDayPatterns = {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
        },
        parseDayPatterns = {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
        },
        matchDayPeriodPatterns = {
            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
        },
        parseDayPeriodPatterns = {
            any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i
            }
        },
        match = {
            ordinalNumber: buildMatchPatternFn({
                matchPattern: matchOrdinalNumberPattern,
                parsePattern: parseOrdinalNumberPattern,
                valueCallback: function(t) {
                    return parseInt(t, 10)
                }
            }),
            era: buildMatchFn({
                matchPatterns: matchEraPatterns,
                defaultMatchWidth: "wide",
                parsePatterns: parseEraPatterns,
                defaultParseWidth: "any"
            }),
            quarter: buildMatchFn({
                matchPatterns: matchQuarterPatterns,
                defaultMatchWidth: "wide",
                parsePatterns: parseQuarterPatterns,
                defaultParseWidth: "any",
                valueCallback: function(t) {
                    return t + 1
                }
            }),
            month: buildMatchFn({
                matchPatterns: matchMonthPatterns,
                defaultMatchWidth: "wide",
                parsePatterns: parseMonthPatterns,
                defaultParseWidth: "any"
            }),
            day: buildMatchFn({
                matchPatterns: matchDayPatterns,
                defaultMatchWidth: "wide",
                parsePatterns: parseDayPatterns,
                defaultParseWidth: "any"
            }),
            dayPeriod: buildMatchFn({
                matchPatterns: matchDayPeriodPatterns,
                defaultMatchWidth: "any",
                parsePatterns: parseDayPeriodPatterns,
                defaultParseWidth: "any"
            })
        };
    const match$1 = match;
    var locale = {
        code: "en-US",
        formatDistance: formatDistance$1,
        formatLong: formatLong$1,
        formatRelative: formatRelative$1,
        localize: localize$1,
        match: match$1,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    };
    const defaultLocale = locale;

    function subMilliseconds(t, e) {
        requiredArgs(2, arguments);
        var n = toInteger(e);
        return addMilliseconds(t, -n)
    }
    var MILLISECONDS_IN_DAY = 864e5;

    function getUTCDayOfYear(t) {
        requiredArgs(1, arguments);
        var e = toDate(t),
            n = e.getTime();
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        var a = e.getTime(),
            r = n - a;
        return Math.floor(r / MILLISECONDS_IN_DAY) + 1
    }

    function startOfUTCISOWeek(t) {
        requiredArgs(1, arguments);
        var e = 1,
            n = toDate(t),
            a = n.getUTCDay(),
            r = (a < e ? 7 : 0) + a - e;
        return n.setUTCDate(n.getUTCDate() - r), n.setUTCHours(0, 0, 0, 0), n
    }

    function getUTCISOWeekYear(t) {
        requiredArgs(1, arguments);
        var e = toDate(t),
            n = e.getUTCFullYear(),
            a = new Date(0);
        a.setUTCFullYear(n + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
        var r = startOfUTCISOWeek(a),
            o = new Date(0);
        o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
        var i = startOfUTCISOWeek(o);
        return e.getTime() >= r.getTime() ? n + 1 : e.getTime() >= i.getTime() ? n : n - 1
    }

    function startOfUTCISOWeekYear(t) {
        requiredArgs(1, arguments);
        var e = getUTCISOWeekYear(t),
            n = new Date(0);
        n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
        var a = startOfUTCISOWeek(n);
        return a
    }
    var MILLISECONDS_IN_WEEK$1 = 6048e5;

    function getUTCISOWeek(t) {
        requiredArgs(1, arguments);
        var e = toDate(t),
            n = startOfUTCISOWeek(e).getTime() - startOfUTCISOWeekYear(e).getTime();
        return Math.round(n / MILLISECONDS_IN_WEEK$1) + 1
    }

    function startOfUTCWeek(t, e) {
        requiredArgs(1, arguments);
        var n = e || {},
            a = n.locale,
            r = a && a.options && a.options.weekStartsOn,
            o = r == null ? 0 : toInteger(r),
            i = n.weekStartsOn == null ? o : toInteger(n.weekStartsOn);
        if (!(i >= 0 && i <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var s = toDate(t),
            c = s.getUTCDay(),
            d = (c < i ? 7 : 0) + c - i;
        return s.setUTCDate(s.getUTCDate() - d), s.setUTCHours(0, 0, 0, 0), s
    }

    function getUTCWeekYear(t, e) {
        requiredArgs(1, arguments);
        var n = toDate(t),
            a = n.getUTCFullYear(),
            r = e || {},
            o = r.locale,
            i = o && o.options && o.options.firstWeekContainsDate,
            s = i == null ? 1 : toInteger(i),
            c = r.firstWeekContainsDate == null ? s : toInteger(r.firstWeekContainsDate);
        if (!(c >= 1 && c <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var d = new Date(0);
        d.setUTCFullYear(a + 1, 0, c), d.setUTCHours(0, 0, 0, 0);
        var l = startOfUTCWeek(d, e),
            u = new Date(0);
        u.setUTCFullYear(a, 0, c), u.setUTCHours(0, 0, 0, 0);
        var f = startOfUTCWeek(u, e);
        return n.getTime() >= l.getTime() ? a + 1 : n.getTime() >= f.getTime() ? a : a - 1
    }

    function startOfUTCWeekYear(t, e) {
        requiredArgs(1, arguments);
        var n = e || {},
            a = n.locale,
            r = a && a.options && a.options.firstWeekContainsDate,
            o = r == null ? 1 : toInteger(r),
            i = n.firstWeekContainsDate == null ? o : toInteger(n.firstWeekContainsDate),
            s = getUTCWeekYear(t, e),
            c = new Date(0);
        c.setUTCFullYear(s, 0, i), c.setUTCHours(0, 0, 0, 0);
        var d = startOfUTCWeek(c, e);
        return d
    }
    var MILLISECONDS_IN_WEEK = 6048e5;

    function getUTCWeek(t, e) {
        requiredArgs(1, arguments);
        var n = toDate(t),
            a = startOfUTCWeek(n, e).getTime() - startOfUTCWeekYear(n, e).getTime();
        return Math.round(a / MILLISECONDS_IN_WEEK) + 1
    }

    function addLeadingZeros(t, e) {
        for (var n = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < e;) a = "0" + a;
        return n + a
    }
    var formatters$2 = {
        y: function(t, e) {
            var n = t.getUTCFullYear(),
                a = n > 0 ? n : 1 - n;
            return addLeadingZeros(e === "yy" ? a % 100 : a, e.length)
        },
        M: function(t, e) {
            var n = t.getUTCMonth();
            return e === "M" ? String(n + 1) : addLeadingZeros(n + 1, 2)
        },
        d: function(t, e) {
            return addLeadingZeros(t.getUTCDate(), e.length)
        },
        a: function(t, e) {
            var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
                case "a":
                case "aa":
                    return n.toUpperCase();
                case "aaa":
                    return n;
                case "aaaaa":
                    return n[0];
                case "aaaa":
                default:
                    return n === "am" ? "a.m." : "p.m."
            }
        },
        h: function(t, e) {
            return addLeadingZeros(t.getUTCHours() % 12 || 12, e.length)
        },
        H: function(t, e) {
            return addLeadingZeros(t.getUTCHours(), e.length)
        },
        m: function(t, e) {
            return addLeadingZeros(t.getUTCMinutes(), e.length)
        },
        s: function(t, e) {
            return addLeadingZeros(t.getUTCSeconds(), e.length)
        },
        S: function(t, e) {
            var n = e.length,
                a = t.getUTCMilliseconds(),
                r = Math.floor(a * Math.pow(10, n - 3));
            return addLeadingZeros(r, e.length)
        }
    };
    const formatters$3 = formatters$2;
    var dayPeriodEnum = {
            am: "am",
            pm: "pm",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        formatters = {
            G: function(t, e, n) {
                var a = t.getUTCFullYear() > 0 ? 1 : 0;
                switch (e) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return n.era(a, {
                            width: "abbreviated"
                        });
                    case "GGGGG":
                        return n.era(a, {
                            width: "narrow"
                        });
                    case "GGGG":
                    default:
                        return n.era(a, {
                            width: "wide"
                        })
                }
            },
            y: function(t, e, n) {
                if (e === "yo") {
                    var a = t.getUTCFullYear(),
                        r = a > 0 ? a : 1 - a;
                    return n.ordinalNumber(r, {
                        unit: "year"
                    })
                }
                return formatters$3.y(t, e)
            },
            Y: function(t, e, n, a) {
                var r = getUTCWeekYear(t, a),
                    o = r > 0 ? r : 1 - r;
                if (e === "YY") {
                    var i = o % 100;
                    return addLeadingZeros(i, 2)
                }
                return e === "Yo" ? n.ordinalNumber(o, {
                    unit: "year"
                }) : addLeadingZeros(o, e.length)
            },
            R: function(t, e) {
                var n = getUTCISOWeekYear(t);
                return addLeadingZeros(n, e.length)
            },
            u: function(t, e) {
                var n = t.getUTCFullYear();
                return addLeadingZeros(n, e.length)
            },
            Q: function(t, e, n) {
                var a = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                    case "Q":
                        return String(a);
                    case "QQ":
                        return addLeadingZeros(a, 2);
                    case "Qo":
                        return n.ordinalNumber(a, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return n.quarter(a, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return n.quarter(a, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQ":
                    default:
                        return n.quarter(a, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            q: function(t, e, n) {
                var a = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                    case "q":
                        return String(a);
                    case "qq":
                        return addLeadingZeros(a, 2);
                    case "qo":
                        return n.ordinalNumber(a, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return n.quarter(a, {
                            width: "abbreviated",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return n.quarter(a, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqq":
                    default:
                        return n.quarter(a, {
                            width: "wide",
                            context: "standalone"
                        })
                }
            },
            M: function(t, e, n) {
                var a = t.getUTCMonth();
                switch (e) {
                    case "M":
                    case "MM":
                        return formatters$3.M(t, e);
                    case "Mo":
                        return n.ordinalNumber(a + 1, {
                            unit: "month"
                        });
                    case "MMM":
                        return n.month(a, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return n.month(a, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMM":
                    default:
                        return n.month(a, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            L: function(t, e, n) {
                var a = t.getUTCMonth();
                switch (e) {
                    case "L":
                        return String(a + 1);
                    case "LL":
                        return addLeadingZeros(a + 1, 2);
                    case "Lo":
                        return n.ordinalNumber(a + 1, {
                            unit: "month"
                        });
                    case "LLL":
                        return n.month(a, {
                            width: "abbreviated",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return n.month(a, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLL":
                    default:
                        return n.month(a, {
                            width: "wide",
                            context: "standalone"
                        })
                }
            },
            w: function(t, e, n, a) {
                var r = getUTCWeek(t, a);
                return e === "wo" ? n.ordinalNumber(r, {
                    unit: "week"
                }) : addLeadingZeros(r, e.length)
            },
            I: function(t, e, n) {
                var a = getUTCISOWeek(t);
                return e === "Io" ? n.ordinalNumber(a, {
                    unit: "week"
                }) : addLeadingZeros(a, e.length)
            },
            d: function(t, e, n) {
                return e === "do" ? n.ordinalNumber(t.getUTCDate(), {
                    unit: "date"
                }) : formatters$3.d(t, e)
            },
            D: function(t, e, n) {
                var a = getUTCDayOfYear(t);
                return e === "Do" ? n.ordinalNumber(a, {
                    unit: "dayOfYear"
                }) : addLeadingZeros(a, e.length)
            },
            E: function(t, e, n) {
                var a = t.getUTCDay();
                switch (e) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return n.day(a, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return n.day(a, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return n.day(a, {
                            width: "short",
                            context: "formatting"
                        });
                    case "EEEE":
                    default:
                        return n.day(a, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            e: function(t, e, n, a) {
                var r = t.getUTCDay(),
                    o = (r - a.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                    case "e":
                        return String(o);
                    case "ee":
                        return addLeadingZeros(o, 2);
                    case "eo":
                        return n.ordinalNumber(o, {
                            unit: "day"
                        });
                    case "eee":
                        return n.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "eeeee":
                        return n.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return n.day(r, {
                            width: "short",
                            context: "formatting"
                        });
                    case "eeee":
                    default:
                        return n.day(r, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            c: function(t, e, n, a) {
                var r = t.getUTCDay(),
                    o = (r - a.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                    case "c":
                        return String(o);
                    case "cc":
                        return addLeadingZeros(o, e.length);
                    case "co":
                        return n.ordinalNumber(o, {
                            unit: "day"
                        });
                    case "ccc":
                        return n.day(r, {
                            width: "abbreviated",
                            context: "standalone"
                        });
                    case "ccccc":
                        return n.day(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return n.day(r, {
                            width: "short",
                            context: "standalone"
                        });
                    case "cccc":
                    default:
                        return n.day(r, {
                            width: "wide",
                            context: "standalone"
                        })
                }
            },
            i: function(t, e, n) {
                var a = t.getUTCDay(),
                    r = a === 0 ? 7 : a;
                switch (e) {
                    case "i":
                        return String(r);
                    case "ii":
                        return addLeadingZeros(r, e.length);
                    case "io":
                        return n.ordinalNumber(r, {
                            unit: "day"
                        });
                    case "iii":
                        return n.day(a, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "iiiii":
                        return n.day(a, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "iiiiii":
                        return n.day(a, {
                            width: "short",
                            context: "formatting"
                        });
                    case "iiii":
                    default:
                        return n.day(a, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            a: function(t, e, n) {
                var a = t.getUTCHours(),
                    r = a / 12 >= 1 ? "pm" : "am";
                switch (e) {
                    case "a":
                    case "aa":
                        return n.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "aaa":
                        return n.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }).toLowerCase();
                    case "aaaaa":
                        return n.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return n.dayPeriod(r, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            b: function(t, e, n) {
                var a = t.getUTCHours(),
                    r;
                switch (a === 12 ? r = dayPeriodEnum.noon : a === 0 ? r = dayPeriodEnum.midnight : r = a / 12 >= 1 ? "pm" : "am", e) {
                    case "b":
                    case "bb":
                        return n.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "bbb":
                        return n.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }).toLowerCase();
                    case "bbbbb":
                        return n.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return n.dayPeriod(r, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            B: function(t, e, n) {
                var a = t.getUTCHours(),
                    r;
                switch (a >= 17 ? r = dayPeriodEnum.evening : a >= 12 ? r = dayPeriodEnum.afternoon : a >= 4 ? r = dayPeriodEnum.morning : r = dayPeriodEnum.night, e) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return n.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return n.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return n.dayPeriod(r, {
                            width: "wide",
                            context: "formatting"
                        })
                }
            },
            h: function(t, e, n) {
                if (e === "ho") {
                    var a = t.getUTCHours() % 12;
                    return a === 0 && (a = 12), n.ordinalNumber(a, {
                        unit: "hour"
                    })
                }
                return formatters$3.h(t, e)
            },
            H: function(t, e, n) {
                return e === "Ho" ? n.ordinalNumber(t.getUTCHours(), {
                    unit: "hour"
                }) : formatters$3.H(t, e)
            },
            K: function(t, e, n) {
                var a = t.getUTCHours() % 12;
                return e === "Ko" ? n.ordinalNumber(a, {
                    unit: "hour"
                }) : addLeadingZeros(a, e.length)
            },
            k: function(t, e, n) {
                var a = t.getUTCHours();
                return a === 0 && (a = 24), e === "ko" ? n.ordinalNumber(a, {
                    unit: "hour"
                }) : addLeadingZeros(a, e.length)
            },
            m: function(t, e, n) {
                return e === "mo" ? n.ordinalNumber(t.getUTCMinutes(), {
                    unit: "minute"
                }) : formatters$3.m(t, e)
            },
            s: function(t, e, n) {
                return e === "so" ? n.ordinalNumber(t.getUTCSeconds(), {
                    unit: "second"
                }) : formatters$3.s(t, e)
            },
            S: function(t, e) {
                return formatters$3.S(t, e)
            },
            X: function(t, e, n, a) {
                var r = a._originalDate || t,
                    o = r.getTimezoneOffset();
                if (o === 0) return "Z";
                switch (e) {
                    case "X":
                        return formatTimezoneWithOptionalMinutes(o);
                    case "XXXX":
                    case "XX":
                        return formatTimezone(o);
                    case "XXXXX":
                    case "XXX":
                    default:
                        return formatTimezone(o, ":")
                }
            },
            x: function(t, e, n, a) {
                var r = a._originalDate || t,
                    o = r.getTimezoneOffset();
                switch (e) {
                    case "x":
                        return formatTimezoneWithOptionalMinutes(o);
                    case "xxxx":
                    case "xx":
                        return formatTimezone(o);
                    case "xxxxx":
                    case "xxx":
                    default:
                        return formatTimezone(o, ":")
                }
            },
            O: function(t, e, n, a) {
                var r = a._originalDate || t,
                    o = r.getTimezoneOffset();
                switch (e) {
                    case "O":
                    case "OO":
                    case "OOO":
                        return "GMT" + formatTimezoneShort(o, ":");
                    case "OOOO":
                    default:
                        return "GMT" + formatTimezone(o, ":")
                }
            },
            z: function(t, e, n, a) {
                var r = a._originalDate || t,
                    o = r.getTimezoneOffset();
                switch (e) {
                    case "z":
                    case "zz":
                    case "zzz":
                        return "GMT" + formatTimezoneShort(o, ":");
                    case "zzzz":
                    default:
                        return "GMT" + formatTimezone(o, ":")
                }
            },
            t: function(t, e, n, a) {
                var r = a._originalDate || t,
                    o = Math.floor(r.getTime() / 1e3);
                return addLeadingZeros(o, e.length)
            },
            T: function(t, e, n, a) {
                var r = a._originalDate || t,
                    o = r.getTime();
                return addLeadingZeros(o, e.length)
            }
        };

    function formatTimezoneShort(t, e) {
        var n = t > 0 ? "-" : "+",
            a = Math.abs(t),
            r = Math.floor(a / 60),
            o = a % 60;
        if (o === 0) return n + String(r);
        var i = e || "";
        return n + String(r) + i + addLeadingZeros(o, 2)
    }

    function formatTimezoneWithOptionalMinutes(t, e) {
        if (t % 60 === 0) {
            var n = t > 0 ? "-" : "+";
            return n + addLeadingZeros(Math.abs(t) / 60, 2)
        }
        return formatTimezone(t, e)
    }

    function formatTimezone(t, e) {
        var n = e || "",
            a = t > 0 ? "-" : "+",
            r = Math.abs(t),
            o = addLeadingZeros(Math.floor(r / 60), 2),
            i = addLeadingZeros(r % 60, 2);
        return a + o + n + i
    }
    const formatters$1 = formatters;

    function dateLongFormatter(t, e) {
        switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return e.date({
                    width: "full"
                })
        }
    }

    function timeLongFormatter(t, e) {
        switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            case "pppp":
            default:
                return e.time({
                    width: "full"
                })
        }
    }

    function dateTimeLongFormatter(t, e) {
        var n = t.match(/(P+)(p+)?/) || [],
            a = n[1],
            r = n[2];
        if (!r) return dateLongFormatter(t, e);
        var o;
        switch (a) {
            case "P":
                o = e.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                o = e.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                o = e.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                o = e.dateTime({
                    width: "full"
                });
                break
        }
        return o.replace("{{date}}", dateLongFormatter(a, e)).replace("{{time}}", timeLongFormatter(r, e))
    }
    var longFormatters = {
        p: timeLongFormatter,
        P: dateTimeLongFormatter
    };
    const longFormatters$1 = longFormatters;
    var protectedDayOfYearTokens = ["D", "DD"],
        protectedWeekYearTokens = ["YY", "YYYY"];

    function isProtectedDayOfYearToken(t) {
        return protectedDayOfYearTokens.indexOf(t) !== -1
    }

    function isProtectedWeekYearToken(t) {
        return protectedWeekYearTokens.indexOf(t) !== -1
    }

    function throwProtectedError(t, e, n) {
        if (t === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
        if (t === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://git.io/fxCyr"));
        if (t === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"));
        if (t === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://git.io/fxCyr"))
    }
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        escapedStringRegExp = /^'([^]*?)'?$/,
        doubleQuoteRegExp = /''/g,
        unescapedLatinCharacterRegExp = /[a-zA-Z]/;

    function format(t, e, n) {
        requiredArgs(2, arguments);
        var a = String(e),
            r = n || {},
            o = r.locale || defaultLocale,
            i = o.options && o.options.firstWeekContainsDate,
            s = i == null ? 1 : toInteger(i),
            c = r.firstWeekContainsDate == null ? s : toInteger(r.firstWeekContainsDate);
        if (!(c >= 1 && c <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var d = o.options && o.options.weekStartsOn,
            l = d == null ? 0 : toInteger(d),
            u = r.weekStartsOn == null ? l : toInteger(r.weekStartsOn);
        if (!(u >= 0 && u <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!o.localize) throw new RangeError("locale must contain localize property");
        if (!o.formatLong) throw new RangeError("locale must contain formatLong property");
        var f = toDate(t);
        if (!isValid(f)) throw new RangeError("Invalid time value");
        var h = getTimezoneOffsetInMilliseconds(f),
            v = subMilliseconds(f, h),
            y = {
                firstWeekContainsDate: c,
                weekStartsOn: u,
                locale: o,
                _originalDate: f
            },
            p = a.match(longFormattingTokensRegExp).map(function(S) {
                var T = S[0];
                if (T === "p" || T === "P") {
                    var I = longFormatters$1[T];
                    return I(S, o.formatLong, y)
                }
                return S
            }).join("").match(formattingTokensRegExp).map(function(S) {
                if (S === "''") return "'";
                var T = S[0];
                if (T === "'") return cleanEscapedString(S);
                var I = formatters$1[T];
                if (I) return !r.useAdditionalWeekYearTokens && isProtectedWeekYearToken(S) && throwProtectedError(S, e, t), !r.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(S) && throwProtectedError(S, e, t), I(v, S, o.localize, y);
                if (T.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + T + "`");
                return S
            }).join("");
        return p
    }

    function cleanEscapedString(t) {
        return t.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
    }
    var ShopifyFormatterPrefix;
    (t => {
        t.formatUnit = ({
            value: e,
            unit: n
        }, a) => a.showUnit ? `${e} ${n}` : `${e}.0`, t.formatRating = ({
            value: e,
            scale_max: n
        }, a) => a.showMaxScale ? `${e}/${n}` : e
    })(ShopifyFormatterPrefix || (ShopifyFormatterPrefix = {}));
    const formatDataVariantMetafields = t => {
            try {
                const e = [],
                    n = textToJsonUseVal(t == null ? void 0 : t[0]) || {},
                    {
                        currentType: a,
                        currentKey: r,
                        currentProps: o
                    } = n;
                let i = a;
                const s = a == null ? void 0 : a.match(REGEX_CHECK_LAST_WORD_BEFORE_UNDERSCORE);
                return s && (i = s[1]), t.forEach(c => {
                    if (!Array.isArray(c)) return;
                    const d = {
                        currentType: a,
                        currentTypeGuard: i,
                        currentProps: o,
                        currentVariantId: c[1].id,
                        currentKey: r,
                        ...c[0]
                    };
                    e.push(d)
                }), e
            } catch (e) {
                return console.error("===> Error formatDataVariantMetafields:", e), []
            }
        },
        formatShopifyDate = (t, e) => {
            try {
                if (!t) return null;
                const {
                    dateFormat: n
                } = e, a = new Date(t);
                return format(a, DATE_FORMATS_METAFIELD[n])
            } catch (n) {
                return console.error("===> Error formatting Shopify date:", n), t
            }
        },
        formatShopifyDateTime = (t, e) => {
            try {
                const {
                    dateFormat: n,
                    showDate: a,
                    showTime: r,
                    timeFormat: o,
                    showTimezone: i,
                    isViewMode: s
                } = e, c = new Date(t);
                if (!t) return null;
                let d = "",
                    l = "",
                    u = "";
                a && (d = s ? n : DATE_FORMATS_METAFIELD[n]), r && (l = s ? `at ${o}` : `'at' ${TIME_FORMATS_METAFIELD[o]}`), i && (u = s ? "GMT%z" : "'GMT'xx");
                let f = format(c, `${d} ${l} ${u}`);
                return s && (f = `${d} ${l} ${u}`), f
            } catch (n) {
                return console.error("===> Error formatting Shopify date and time:", t, n), null
            }
        },
        formatShopifyUrl = (t, e) => {
            try {
                const {
                    linkToUrl: n,
                    linkText: a
                } = e;
                return n ? `<a href="${t}" target="_blank">${a||t}</a>` : t
            } catch (n) {
                return console.error("===> Error formatting Shopify URL:", n), t
            }
        },
        formatShopifyBoolean = (t, e) => {
            const {
                trueValText: n,
                falseValText: a
            } = e;
            return t ? n || String(t) : a || String(t)
        },
        formatShopifyMoney = (t, e) => {
            var o;
            const {
                amount: n,
                currency_code: a
            } = t || {}, {
                showUnit: r
            } = e || {};
            try {
                return (o = `${Number(n).toLocaleString("en-US")} ${r?a:""}`) == null ? void 0 : o.replace(/,/g, ".")
            } catch {
                return r ? `${n} ${a}` : n
            }
        },
        formatShopifyList = (t, e, n) => {
            var s, c;
            const {
                currentType: a,
                currentProps: r
            } = n || {}, {
                showUnit: o
            } = r || {};
            let i = "";
            try {
                const d = (c = (s = e == null ? void 0 : e.children) == null ? void 0 : s[0]) == null ? void 0 : c.className;
                return Array.isArray(t) && t.forEach((l = "") => {
                    try {
                        switch (a) {
                            case TYPE_METAFIELD.LIST_URL_FIELD:
                                {
                                    i += `<li class='${d}'>${formatShopifyUrl(l,r)}</li>`;
                                    break
                                }
                            case TYPE_METAFIELD.LIST_RATING_FIELD:
                                {
                                    i += `<li class='${d}'>${ShopifyFormatterPrefix.formatRating(l,r)}</li>`;
                                    break
                                }
                            case TYPE_METAFIELD.LIST_DATE_FIELD:
                                {
                                    i += `<li class='${d}'>${formatShopifyDate(l,r)}</li>`;
                                    break
                                }
                            case TYPE_METAFIELD.LIST_DATE_TIME_FIELD:
                                {
                                    i += `<li class='${d}'>${formatShopifyDateTime(l,r)}</li>`;
                                    break
                                }
                            default:
                                {
                                    if (typeof l == "object") {
                                        const {
                                            value: u,
                                            unit: f,
                                            scale_max: h
                                        } = l || {}, v = u, y = f || h || "";
                                        l = `${v}${o?` ${UNIT_MAPPING_METAFIELD[y]||y}`:".0"}`
                                    }
                                    i += `<li class='${d}'>${l}</li>`
                                }
                        }
                    } catch {
                        i = ""
                    }
                }), i
            } catch {
                return i
            }
        };

    function formatShopifyListColor(t, e) {
        try {
            const n = document.createElement("div");
            return e.forEach(a => {
                const r = t.childNodes[0].cloneNode(!0);
                r instanceof HTMLElement && (r.style.backgroundColor = a, n.appendChild(r))
            }), n.innerHTML
        } catch {
            return null
        }
    }

    function formatMoney(t = "0", e = pfSetting.moneyFormat) {
        let n = "";
        const a = /\{\{\s*(\w+)\s*}}/,
            r = e;
        if (!r) return t;
        typeof t == "string" && (t = t.replace(".", ""));

        function o(s, c) {
            return typeof s > "u" ? c : s
        }

        function i(s, c, d, l) {
            if (c = o(c, 2), d = o(d, ","), l = o(l, "."), isNaN(s) || s == null) return 0;
            s = (s / 100).toFixed(c);
            const u = s.split("."),
                f = u[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${d}`),
                h = u[1] ? l + u[1] : "";
            return f + h
        }
        switch (r.match(a)[1]) {
            case "amount":
                n = i(t, 2);
                break;
            case "amount_no_decimals":
                n = i(t, 0);
                break;
            case "amount_with_comma_separator":
                n = i(t, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                n = i(t, 0, ".", ",");
                break;
            case "amount_with_apostrophe_separator":
                n = i(t, 2, "'", ".");
                break;
            case "amount_with_space_separator":
                n = i(t, 2, " ", ",");
                break;
            case "amount_no_decimals_with_space_separator":
                n = i(t, 0, " ", " ");
                break;
            case "amount_with_period_and_space_separator":
                n = i(t, 2, " ", ".");
                break
        }
        return r.replace(a, n)
    }

    function convertSchemaToHtml(t, e = !1) {
        var a;
        let n = "";
        if ((t == null ? void 0 : t.type) === "root" && ((a = t == null ? void 0 : t.children) == null ? void 0 : a.length) > 0) e ? n += `
          <div class="${e===!0?"rte":e}">
            ${convertSchemaToHtml(t.children)}
          </div>
          ` : n += convertSchemaToHtml(t.children);
        else
            for (let r = 0; r < t.length; r++) {
                const o = t[r];
                switch (o == null ? void 0 : o.type) {
                    case "paragraph":
                        n += buildParagraph(o);
                        break;
                    case "heading":
                        n += buildHeading(o);
                        break;
                    case "list":
                        n += buildList(o);
                        break;
                    case "list-item":
                        n += buildListItem(o);
                        break;
                    case "link":
                        n += buildLink(o);
                        break;
                    case "text":
                        n += buildText(o);
                        break
                }
            }
        return n
    }

    function buildParagraph(t) {
        if (t != null && t.children) return `<p>${convertSchemaToHtml(t==null?void 0:t.children)}</p>`
    }

    function buildHeading(t) {
        if (t != null && t.children) return `<h${t==null?void 0:t.level}>${convertSchemaToHtml(t==null?void 0:t.children)}</h${t==null?void 0:t.level}>`
    }

    function buildList(t) {
        if (t != null && t.children) return (t == null ? void 0 : t.listType) === "ordered" ? `<ol>${convertSchemaToHtml(t==null?void 0:t.children)}</ol>` : `<ul>${convertSchemaToHtml(t==null?void 0:t.children)}</ul>`
    }

    function buildListItem(t) {
        if (t != null && t.children) return `<li>${convertSchemaToHtml(t==null?void 0:t.children)}</li>`
    }

    function buildLink(t) {
        return `<a href="${t==null?void 0:t.url}" title="${t==null?void 0:t.title}" target="${t==null?void 0:t.target}">${convertSchemaToHtml(t==null?void 0:t.children)}</a>`
    }

    function buildText(t) {
        return t != null && t.bold ? `<strong>${t==null?void 0:t.value}</strong>` : t != null && t.italic ? `<em>${t==null?void 0:t.value}</em>` : t == null ? void 0 : t.value
    }

    function getProductObjectFromProductElement(t) {
        const e = parseInt(t.getAttribute("data-product-id"));
        return pageflyProducts[e] || {}
    }
    async function handleShopifyProductVariantSwatches() {
        document.querySelectorAll('div[data-pf-type="ProductVariantSwatches"]').forEach((e, n) => {
            var u;
            if (e.childElementCount <= 1) return;
            storeElemInProductByType(e, "swatches");
            const a = e.closest('[data-pf-type="ProductBox"]'),
                r = ((u = a || document) == null ? void 0 : u.querySelectorAll('[data-pf-type="ProductVariantMetafield"]')) || [],
                o = a && a.className,
                i = e.getAttribute("data-combined") === "true",
                s = parseInt(e.getAttribute("data-product-id")),
                c = getProductObjectFromProductElement(e),
                d = (c == null ? void 0 : c.variants) || [],
                l = e.querySelectorAll(".pf-option-swatches");
            e.addEventListener("change", f => {
                let h;
                if (i)
                    if (e.getAttribute("data-display") === "dropdown") {
                        const y = f.target;
                        h = d.find(p => p.id.toString() === y.value)
                    } else {
                        const y = f.target;
                        h = d.find(p => p.id.toString() === y.value)
                    }
                else {
                    const y = Array.from(l).map(p => p.getAttribute("data-swatch-type") === "dropdown" ? p.querySelector("select").value : p.querySelector("input:checked").value).join(" / ");
                    h = d.find(p => p.title === y), updateByCurrentVariant(s, h, o, !0, !1, f.target)
                }
                h && (updateByCurrentVariant(s, h, o, !0, !1, f.target), getPageTypeFromPFPageSetting() === "product" && window.history.replaceState(null, null, h != null && h.id ? `?variant=${h.id}` : ""), handleToggleVariantMetafield({ ...h,
                    variantProductId: s,
                    isOutSideBoxProduct: !a
                }, r))
            })
        })
    }
    const handleToggleVariantMetafield = (t, e) => {
            const {
                variantProductId: n,
                isOutSideBoxProduct: a
            } = t || {};
            e.forEach(r => {
                var S, T;
                if (!r) return;
                const o = r.querySelector(".variant-metafields"),
                    i = r.querySelector('[data-pf-type="VariantMetafieldValue"]'),
                    s = r.getAttribute("data-product-id");
                if (!(i && (a ? Number(s) === Number(n) : !0))) return;
                const l = (formatDataVariantMetafields(textToJsonUseVal(o == null ? void 0 : o.textContent)) || []).find(I => I.currentVariantId === (t == null ? void 0 : t.id)) || {},
                    {
                        currentKey: u
                    } = l,
                    f = l == null ? void 0 : l[u],
                    h = typeof f == "string" ? f.trim().replace(/\n/g, "<br>") : f,
                    v = !VALUE_NOT_SATISFY_METAFIELD.includes(h);
                r.style.cssText = v ? "" : "visibility: hidden; position: absolute;";
                let p = ((S = l == null ? void 0 : l.currentType) == null ? void 0 : S.startsWith("list.")) ? (T = i == null ? void 0 : i.childNodes) == null ? void 0 : T[0] : i;
                p || (p = document.createElement("div"), i.appendChild(p)), v && updateBoxValueVariantMetafield(l, i, p, h)
            })
        },
        updateBoxValueVariantMetafield = (t, e, n, a) => {
            const {
                currentType: r,
                currentProps: o
            } = t || {};
            switch (r) {
                case TYPE_METAFIELD.COLOR_FIELD:
                    {
                        e.style.setProperty("--color", a);
                        break
                    }
                case TYPE_METAFIELD.LIST_COLOR_FIELD:
                    {
                        n.innerHTML = formatShopifyListColor(n, a);
                        break
                    }
                case TYPE_METAFIELD.DATE_TIME_FIELD:
                case TYPE_METAFIELD.DATE_FIELD:
                    {
                        const i = r === TYPE_METAFIELD.DATE_TIME_FIELD ? formatShopifyDateTime(a, o) : formatShopifyDate(a, o);n.innerHTML = i;
                        break
                    }
                case TYPE_METAFIELD.NUMBER_INTEGER_FIELD:
                case TYPE_METAFIELD.NUMBER_DECIMAL_FIELD:
                    {
                        n.innerHTML = parseInt(a).toLocaleString("en-US");
                        break
                    }
                case TYPE_METAFIELD.WEIGHT_FIELD:
                case TYPE_METAFIELD.DIMENSION_FIELD:
                case TYPE_METAFIELD.VOLUME_FIELD:
                    {
                        n.innerHTML = ShopifyFormatterPrefix.formatUnit(a, o);
                        break
                    }
                case TYPE_METAFIELD.MULTI_LINE_TEXT_FIELD:
                case TYPE_METAFIELD.SINGLE_LINE_TEXT_FIELD:
                    {
                        n.innerHTML = a;
                        break
                    }
                case TYPE_METAFIELD.BOOLEAN_FIELD:
                    {
                        n.innerHTML = formatShopifyBoolean(a, o);
                        break
                    }
                case TYPE_METAFIELD.RATING_FIELD:
                    {
                        n.innerHTML = ShopifyFormatterPrefix.formatRating(a, o);
                        break
                    }
                case TYPE_METAFIELD.URL_FIELD:
                    {
                        n.outerHTML = formatShopifyUrl(a, o);
                        break
                    }
                case TYPE_METAFIELD.MONEY_FIELD:
                    {
                        n.innerHTML = formatShopifyMoney(a, o);
                        break
                    }
                case TYPE_METAFIELD.LIST_DATE_TIME_FIELD:
                case TYPE_METAFIELD.LIST_DATE_FIELD:
                case TYPE_METAFIELD.LIST_NUMBER_INTEGER_FIELD:
                case TYPE_METAFIELD.LIST_NUMBER_DECIMAL_FIELD:
                case TYPE_METAFIELD.LIST_VARIANT_REFERENCE_FIELD:
                case TYPE_METAFIELD.LIST_PRODUCT_REFERENCE_FIELD:
                case TYPE_METAFIELD.LIST_FILE_REFERENCE_FIELD:
                case TYPE_METAFIELD.LIST_PAGE_REFERENCE_FIELD:
                case TYPE_METAFIELD.LIST_IMAGE_REFERENCE_FIELD:
                case TYPE_METAFIELD.LIST_META_OBJECT_FIELD:
                case TYPE_METAFIELD.LIST_WEIGHT_FIELD:
                case TYPE_METAFIELD.LIST_VOLUME_FIELD:
                case TYPE_METAFIELD.LIST_RATING_FIELD:
                case TYPE_METAFIELD.LIST_DIMENSION_FIELD:
                case TYPE_METAFIELD.LIST_SINGLE_LINE_TEXT_FIELD:
                case TYPE_METAFIELD.LIST_URL_FIELD:
                    {
                        e.innerHTML = formatShopifyList(a, e, {
                            currentType: r,
                            currentProps: o
                        });
                        break
                    }
                default:
                    {
                        n.innerHTML = convertSchemaToHtml(a);
                        break
                    }
            }
        };

    function updateOneSwatchesByValue(t, e, n = []) {
        var s, c;
        const a = t.getAttribute("data-combined") === "true",
            r = t.getAttribute("data-sw-id"),
            o = t.getAttribute("data-product-id");
        if (a)
            if (t.getAttribute("data-display") === "dropdown") {
                const l = t == null ? void 0 : t.querySelector('select:not([name="id"])');
                l && l.value !== ((s = e.id) == null ? void 0 : s.toString()) && (l.value = e.id)
            } else {
                const l = t.querySelector(`input[type='radio'][value*='${e.id}']`);
                l && !l.checked && (l.checked = !0)
            }
        else e.options.forEach((d, l) => {
            const u = t.querySelector(`[data-unique-id="${l+1}"].pf-option-swatches`);
            if ((u == null ? void 0 : u.getAttribute("data-swatch-type")) === "dropdown") {
                const h = u == null ? void 0 : u.querySelector(`select>option[value='${d.replace(/\'/g,"\\'")}']`);
                h.selected || (h.selected = !0)
            } else {
                const h = n[l],
                    v = `pf-${r}-${h}-${d.replace(/\"/g,"").replaceAll(" ","-")}-${o}`,
                    y = u == null ? void 0 : u.querySelector(`input[id*='${v.replace(/\'/g,"\\'")}']`);
                y && !y.checked && (y.checked = !0)
            }
        });
        const i = t.querySelector("input[type='hidden'][name='id']");
        i.value !== ((c = e.id) == null ? void 0 : c.toString()) && (i.value = e.id)
    }

    function getCurrentSelectedVariantFromSelectDropDown(t, e) {
        const n = [];
        t.forEach((r, o) => {
            n.push(r.querySelector("option:checked").value)
        });
        const a = n.join(" / ");
        return e.find(r => a === r.title) || e.find(r => a.indexOf(r.title) > -1)
    }

    function updateOneVariantByValue(t, e, n = []) {
        var o;
        const a = t.getAttribute("data-display");
        if (t.getAttribute("data-combined") === "true" === !0) {
            const i = t == null ? void 0 : t.querySelector("select");
            i && i.value !== ((o = e.id) == null ? void 0 : o.toString()) && (i.value = e.id)
        } else a === "dropdown" ? n.forEach((i, s) => {
            const c = t == null ? void 0 : t.querySelectorAll(`select[data-key="${i}"]`);
            c == null || c.forEach((d, l) => {
                d.value = `${e[`option${s+1}`]}`
            })
        }) : a === "radio" && n.forEach((i, s) => {
            var l;
            const c = ((l = t.querySelectorAll(".pf-c[data-unique-id]")[s]) == null ? void 0 : l.getAttribute("data-unique-id")) || 0 + s,
                d = t == null ? void 0 : t.querySelectorAll(`input[name="pf-v-${i}${c}"]`);
            d == null || d.forEach((u, f) => {
                u.value === e[`option${s+1}`] && !u.checked && (u.checked = !0, u.setAttribute("checked", "checked"))
            })
        })
    }
    async function handleShopifyProductVariants() {
        const t = document.querySelectorAll('div[data-pf-type="ProductVariant"]');
        let e = 0;
        t.forEach((n, a) => {
            var h, v, y;
            storeElemInProductByType(n, "variant");
            const r = n,
                o = r.closest('[data-pf-type="ProductBox"]'),
                i = o && o.className,
                s = parseInt(r.getAttribute("data-product-id")),
                c = r.getAttribute("data-combined") === "true",
                d = r.getAttribute("data-display"),
                l = r.getAttribute("data-label") === "true",
                u = pageflyProducts[s],
                f = ((h = u == null ? void 0 : u.variants) == null ? void 0 : h.length) === 1 && ((v = u == null ? void 0 : u.variants[0]) == null ? void 0 : v.title) === "Default Title";
            if (!o && u) {
                const p = u.variantEls || [];
                p.push(n), u.variantEls = p
            }
            if (((y = u == null ? void 0 : u.variants) == null ? void 0 : y.length) < 1 || f) r.style.display = "none";
            else if (u && u.options) {
                const {
                    variants: p,
                    options: S
                } = u, T = S.map((I, w) => {
                    const C = p.map(O => O[`option${w+1}`]);
                    return {
                        key: I,
                        value: C.filter((O, k) => C.indexOf(O) === k)
                    }
                });
                if (c !== !0) {
                    if (n.querySelector(".pf-c") !== null) return;
                    if (d === "dropdown") {
                        n.innerHTML = n.innerHTML + T.map(w => `<div class="pf-c">
											${l?`<label class="pf-variant-label">${w.key}</label>`:""}
											<select class="pf-variant-select" data-key="${w.key}">
												${w.value.map(C=>`<option value="${C.replace(/"/g,"&quot;")}">${C}</option>`).join("")}
											</select>
								</div>`).join("");
                        const I = n.querySelectorAll("select");
                        I.forEach(w => {
                            w.addEventListener("change", () => {
                                const C = getCurrentSelectedVariantFromSelectDropDown(I, p);
                                updateByCurrentVariant(s, C, i), C && (handlePushOwlBackInStock(C.id), handleBackInStockBySureSwift(C), handlePushOwlPriceDrop(C.id)), getPageTypeFromPFPageSetting() === "product" && window.history.replaceState(null, null, C != null && C.id ? `?variant=${C.id}` : "")
                            })
                        })
                    } else if (d === "radio") {
                        let I = function() {
                            const O = [];
                            w.forEach((q, D) => {
                                O.push(q.querySelector("input:checked").value)
                            });
                            const k = O.join(" / ");
                            return p.find(q => q.title === k)
                        };
                        n.innerHTML = n.innerHTML + T.map((O, k) => (e++, `<div class="pf-c" data-unique-id="${e}">
									${l?`<label class="pf-variant-label">${O.key}</label>`:""}
									<div class="pf-variant-radio">
										${O.value.map((q,D)=>{const _=`pf-v-${`${s}`.toLowerCase()}-${k}${D}${e}`;return`<div>
										<input ${D===0?"checked":""}
														type="radio"
														id="${_}" name="pf-v-${O.key+e}" value="${q.replace(/"/g,"&quot;")}"/>
										<label style="margin-left:8px" for="${_}">${q}</label>
									</div>`}).join("")}</div>
						</div>`)).join("");
                        const w = n.querySelectorAll(".pf-variant-radio:not(input)");
                        [...w].map((O, k) => [...O.querySelectorAll("input")]).reduce((O, k) => O.concat(k)).forEach(O => {
                            O.addEventListener("change", k => {
                                k.preventDefault();
                                const q = I();
                                updateByCurrentVariant(s, q, i), q && (handlePushOwlBackInStock(q.id), handleBackInStockBySureSwift(q), handlePushOwlPriceDrop(q.id)), getPageTypeFromPFPageSetting() === "product" && window.history.replaceState(null, null, q != null && q.id ? `?variant=${q.id}` : "")
                            })
                        })
                    }
                } else n.querySelectorAll("select").forEach(w => {
                    w.addEventListener("change", C => {
                        const O = w.querySelector("option:checked").value,
                            k = p.find(D => D.id.toString() === O);
                        updateByCurrentVariant(s, k, i), k && (handlePushOwlBackInStock(k.id), handleBackInStockBySureSwift(k), handlePushOwlPriceDrop(k.id)), getPageTypeFromPFPageSetting() === "product" && window.history.replaceState(null, null, k != null && k.id ? `?variant=${k.id}` : "")
                    })
                })
            }
        })
    }

    function getDefaultVariant(t) {
        const e = t.querySelector('[data-pf-type="ProductMedia"]'),
            n = t.querySelector('[data-pf-type="ProductMedia2"]'),
            a = t.querySelectorAll('[data-pf-type="ProductMedia"]'),
            r = t.querySelectorAll('[data-pf-type="ProductMedia2"]');
        let o;
        if (e) {
            const u = getFrontEndSettings(e);
            o = (u == null ? void 0 : u.imageSource) || "featured"
        }
        if (n) {
            const u = getFrontEndSettings(n);
            o = (u == null ? void 0 : u.imageSource) || "featured"
        }
        let i;
        const s = parseInt(t.getAttribute("data-default-variant"));
        if (getPageTypeFromPFPageSetting() === "product") {
            const u = variantIdByURL();
            u && (i = u)
        }
        const d = t.getAttribute("data-product-id"),
            l = pageflyProducts[d];
        if (l != null && l.variants) {
            const u = l.selected_or_first_available_variant || l.variants[0],
                f = l.variants.find(h => h.id === s) || u;
            if (i) {
                const h = l.variants.find(v => v.id === i);
                if (h) return {
                    variant: h,
                    changeMasterImg: !0
                }
            }
            if (f) return a.length > 1 ? (a.forEach(h => {
                var y;
                ((y = getFrontEndSettings(h)) == null ? void 0 : y.imageSource) !== "default-variant" && h.setAttribute("data-not-default-variant", "true")
            }), {
                variant: f,
                changeMasterImage: !0
            }) : r.length > 1 ? (r.forEach(h => {
                var y;
                ((y = getFrontEndSettings(h)) == null ? void 0 : y.imageSource) !== "default-variant" && h.setAttribute("data-not-default-variant", "true")
            }), {
                variant: f,
                changeMasterImage: !0
            }) : {
                variant: f,
                changeMasterImg: o === "default-variant"
            }
        }
        return {
            variant: null,
            changeMasterImg: !1
        }
    }
    async function handleDefaultVariant() {
        setTimeout(() => {
            document.querySelectorAll('div[data-pf-type="ProductBox"]').forEach((e, n) => {
                var s;
                const a = e.className,
                    r = e.getAttribute("data-product-id"),
                    {
                        variant: o,
                        changeMasterImg: i
                    } = getDefaultVariant(e);
                (s = e.querySelectorAll('[data-pf-type="MainMedia"] [data-splide]')) == null || s.forEach(c => {
                    c != null && c.closest(`.${ACCEPT_UPDATE_VARIANT_BY_IMAGE}`) && (c == null || c.setAttribute("data-no-move-again", "true"))
                }), o && updateByCurrentVariant(r, o, a, i, !0, e)
            })
        }, 100)
    }

    function updateOutsideBoxByVariant(t, e, n = !1, a) {
        var o, i, s, c, d;
        if (t.pfCurrentVariant[OUTSIDE_BOX_KEY] = e, e) {
            t.variantEls && t.variantEls.forEach(u => {
                updateOneVariantByValue(u, e, t.options)
            });
            const l = t.swatchesArr && t.swatchesArr.get(OUTSIDE_BOX_KEY);
            l == null || l.forEach(u => updateOneSwatchesByValue(u, e, t.options)), t.priceArr && t.priceArr.get(OUTSIDE_BOX_KEY) && t.priceArr.get(OUTSIDE_BOX_KEY).forEach(u => {
                typeof e.price == "number" && (u.innerHTML = formatMoney(e.price))
            }), t.comparePriceArr && t.comparePriceArr.get(OUTSIDE_BOX_KEY) && t.comparePriceArr.get(OUTSIDE_BOX_KEY).forEach(u => {
                u.innerHTML = e.compare_at_price ? formatMoney(e.compare_at_price) : ""
            }), t.quantityArr && t.quantityArr.get(OUTSIDE_BOX_KEY) && t.quantityArr.get(OUTSIDE_BOX_KEY).forEach(u => {
                const f = u.querySelector('[data-pf-type="QuantityField"]');
                if (!f) return;
                const v = (f == null ? void 0 : f.getAttribute("data-variants-continue")).includes(`${e.id}`);
                a && parseInt(a) <= 0 && e.available || v ? f == null || f.removeAttribute("max") : f == null || f.setAttribute("max", a || "999")
            }), updateProductMediaOutsideBox((o = t == null ? void 0 : t.mediaArr) == null ? void 0 : o.get(OUTSIDE_BOX_KEY), e), updateProductMediaOutsideBox2((i = t == null ? void 0 : t.mediaArr) == null ? void 0 : i.get(OUTSIDE_BOX_KEY), e), updateProductBadgeByVariant((s = t == null ? void 0 : t.badgeArr) == null ? void 0 : s.get(OUTSIDE_BOX_KEY), e), n || (d = (c = t == null ? void 0 : t.imageInstances) == null ? void 0 : c.get(OUTSIDE_BOX_KEY)) == null || d.forEach(u => u.updateByVariant(e))
        }
        const {
            atcContents: r
        } = t;
        t.atcArr && t.atcArr.get(OUTSIDE_BOX_KEY) && t.atcArr.get(OUTSIDE_BOX_KEY).filter(l => !!l).forEach(l => {
            updateATCTextButtonOnChangeVariant(l, r, e)
        })
    }

    function updateByCurrentVariant(t, e, n, a = !0, r = !1, o = null) {
        var u, f, h, v, y;
        let i;
        o ? i = o.closest(`[data-product-id="${t}"][data-pf-type="ProductBox"]`) : i = n && document.querySelectorAll(`[data-product-id="${t}"].${n.trim().replace(/\s/g,".")}`)[0];
        const s = pageflyProducts[t];
        if (!s || !s.variants) return;
        const c = (u = pageflyProducts[t]) == null ? void 0 : u.quantity.find(p => p.includes(e == null ? void 0 : e.id));
        handleBackInStockBySureSwift(e);
        const d = e && c.split(`${e.id}:`)[1];
        __pagefly_product_store__.update({
            productId: t,
            variant: e
        }), s.pfCurrentVariant || (s.pfCurrentVariant = {}), setTimeout(() => {
            var p, S, T;
            ((p = window.BOLD) == null ? void 0 : p.subscriptions) && ((T = (S = window.BOLD) == null ? void 0 : S.BsubWidget) == null ? void 0 : T.products) && window.BOLD.BsubWidget._renderPrices()
        }, 500);
        const l = i == null ? void 0 : i.querySelectorAll(`.pf-variant-${t}`);
        if (l == null || l.forEach(p => p.value = e == null ? void 0 : e.id), !n) updateOutsideBoxByVariant(s, e, !1, d);
        else {
            const p = getElemIdByClassname(n);
            s.pfCurrentVariant[p] = e;
            const {
                options: S
            } = s, T = () => {
                if (!e) return;
                const k = i == null ? void 0 : i.querySelectorAll('[data-product-type="price"]');
                k == null || k.forEach(D => {
                    e && typeof e.price == "number" && (D.innerHTML = formatMoney(e.price))
                });
                const q = i == null ? void 0 : i.querySelectorAll('[data-product-type="compare_at_price"]');
                q == null || q.forEach(D => {
                    e && (D.innerHTML = e.compare_at_price ? formatMoney(e.compare_at_price) : "")
                })
            }, I = () => {
                var q;
                const k = i == null ? void 0 : i.querySelectorAll('[data-pf-type="QuantityField"]');
                !e || !((q = pageflyProducts[t]) != null && q.quantity) || !k || k == null || k.forEach(D => {
                    const L = D.getAttribute("data-variants-continue").includes(`${e.id}`);
                    D && parseInt(d) <= 0 && e.available || L ? D.removeAttribute("max") : D.setAttribute("max", d)
                })
            };
            if (a && e && e.id) {
                const k = i == null ? void 0 : i.querySelectorAll(`[data-product-id="${t}"][data-pf-type="ProductImage"]`),
                    q = i == null ? void 0 : i.querySelectorAll(`[data-product-id="${t}"][data-pf-type="ProductMedia"]`),
                    D = i == null ? void 0 : i.querySelectorAll(`[data-product-id="${t}"][data-pf-type="ProductMedia2"]`);
                if (k != null && k.length) {
                    const {
                        featured_image: _
                    } = e;
                    _ && (console.log(s == null ? void 0 : s.imageInstances), (h = (f = s == null ? void 0 : s.imageInstances) == null ? void 0 : f.get(p)) == null || h.forEach(L => L == null ? void 0 : L.updateByVariant(e)))
                } else q != null && q.length ? q.forEach(_ => {
                    const L = getProductMediaId(_);
                    !_.getAttribute("data-not-default-variant") && updateImageByVariant(L, e), _.removeAttribute("data-not-default-variant")
                }) : D != null && D.length && D.forEach(_ => {
                    const L = getProductMediaId2(_);
                    !_.getAttribute("data-not-default-variant") && updateImageByVariant2(L, e), _.removeAttribute("data-not-default-variant")
                });
                T(), I()
            } else r && (T(), I());
            const w = (v = s == null ? void 0 : s.badgeArr) == null ? void 0 : v.get(p);
            updateProductBadgeByVariant(w, e);
            const C = [...i == null ? void 0 : i.querySelectorAll('[data-pf-type="ProductATC"]'), ...i == null ? void 0 : i.querySelectorAll('[data-pf-type="ProductATC2"]')],
                {
                    atcContents: O
                } = pageflyProducts[t];
            if (C == null || C.forEach(k => {
                    updateATCTextButtonOnChangeVariant(k, O, e)
                }), e) {
                const k = (y = s == null ? void 0 : s.variantArr) == null ? void 0 : y.get(p);
                k == null || k.forEach(D => {
                    updateOneVariantByValue(D, e, S)
                });
                const q = i == null ? void 0 : i.querySelector(`[data-product-id="${t}"][data-pf-type="ProductVariantSwatches"]`);
                q && updateOneSwatchesByValue(q, e, S)
            }
        }
    }

    function variantIdByURL() {
        const t = window.location.href,
            n = new URLSearchParams(t.split("?")[1]).get("variant");
        return n ? parseInt(n) : null
    }
    var z;
    const lazyLoad = ((z = window.__pagefly_setting) == null ? void 0 : z.imageLazyLoad) || !1;

    function getProductBoxId(t) {
        const e = t == null ? void 0 : t.closest('[data-pf-type="ProductBox"]');
        return getElemIdByClassname(e == null ? void 0 : e.className)
    }

    function initOutSideCurrentVariantFromProductImage(t) {
        if (!t.closest('div[data-pf-type="ProductBox"]')) {
            const e = t.getAttribute("data-product-id"),
                n = pageflyProducts[e];
            if (n && !n.pfCurrentVariant && n.variants) {
                const a = n.selected_or_first_available_variant || n.variants[0];
                n.pfCurrentVariant = {}, n.pfCurrentVariant[OUTSIDE_BOX_KEY] = a, updateOutsideBoxByVariant(n, a, !0)
            }
        }
    }
    async function handleShopifyProductImage() {
        document.querySelectorAll('div[data-pf-type="ProductImage"]').forEach(e => {
            if (e != null && e.hasAttribute("data-product-id")) {
                const n = new ProductImage(e);
                storeInstanceInProductByType(n, "image"), initOutSideCurrentVariantFromProductImage(e), n.run()
            }
        })
    }
    const G = class {
        constructor(e) {
            b(this, "device");
            b(this, "$Wrapper");
            b(this, "$el");
            b(this, "_pId");
            b(this, "product");
            b(this, "setting");
            b(this, "boxName");
            b(this, "_boxId");
            b(this, "itemLength");
            b(this, "$master");
            b(this, "$MasterImg");
            b(this, "$List");
            b(this, "$Paginator");
            b(this, "$Items");
            b(this, "active");
            b(this, "index");
            b(this, "activeIndex");
            b(this, "transform");
            b(this, "imageGallery");
            b(this, "animating");
            b(this, "handleItemSelect", (e, n = !0) => {
                const {
                    limit: a,
                    listLayout: r
                } = this.setting, o = a[this.device];
                e = e.closest(G.selector.item), e && (this.active = this.index, this.index = Object.values(this.$Items).indexOf(e), !(this.active === this.index && o % 2 === 1) && (this.switchImage(this.index, this.active, !0, n), r === LIST_LAYOUT.SLIDE && this.handleSlideList(o)))
            });
            this.$el = e, this.handleItemClick = this.handleItemClick.bind(this), this.handleItemSelect = this.handleItemSelect.bind(this), this.triggerClickAction = this.triggerClickAction.bind(this), this.init()
        }
        get boxId() {
            return this._boxId
        }
        get pId() {
            return this._pId
        }
        init() {
            this.initValue(), this.initDefault()
        }
        initValue() {
            var n;
            const e = G.selector;
            this.device = getDevice(), this._pId = this.$el.getAttribute("data-product-id"), this.product = pageflyProducts[this.pId], this.setting = getFrontEndSettings(this.$el) || {}, console.log("this.setting", this.setting), this.boxName = (n = this.$el.closest(e.box)) == null ? void 0 : n.className, this._boxId = getProductBoxId(this.$el), this.$master = this.$el.querySelector(e.master), this.$MasterImg = this.$master.querySelector("img"), this.$List = this.$el.querySelector(e.list), this.$Paginator = this.$el.querySelectorAll(`${e.pagination}>span`), this.$Items = this.$el.querySelectorAll(e.item), this.itemLength = this.$Items.length, this.itemLength !== 0 && (this.transform = new Transform(this.$List, this.setting, this.$Items[0], .5), this.activeIndex = 0, this.active = 0, this.index = 0)
        }
        initDefault() {
            var o, i, s, c, d;
            if (this.itemLength === 0) return;
            const {
                imageSource: e
            } = this.setting, n = ((o = pageflyProducts[this.pId]) == null ? void 0 : o.selected_or_first_available_variant) || ((i = pageflyProducts[this.pId]) == null ? void 0 : i.variants[0]);
            if (!n) return;
            const a = (s = n == null ? void 0 : n.featured_image) == null ? void 0 : s.position;
            e === "variant" && typeof a == "number" ? setTimeout(() => this.handleItemSelect(this.$Items[a - 1], !1), 500) : ((c = this.$Items[0]) == null || c.setAttribute("data-active", "true"), (d = this.$Paginator[0]) == null || d.setAttribute("data-active", "true"));
            let r = "";
            switch (this.device) {
                case "all":
                    r = "pf-lg-hide";
                    break;
                case "laptop":
                    r = "pf-md-hide";
                    break;
                case "tablet":
                    r = "pf-sm-hide";
                    break;
                case "mobile":
                    r = "pf-hide";
                    break
            }
            this.$Items.forEach(l => {
                r && l.classList.contains(r) && l.setAttribute("hidden", "hidden"), l.classList.remove("pf-lg-hide", "pf-md-hide", "pf-sm-hide", "pf-hide")
            })
        }
        triggerClickAction() {
            const {
                clickAction: e
            } = this.setting;
            if (e === 2) this.showImageGallery();
            else if (e === 1) {
                const n = this.$master.getAttribute("data-href");
                if (n && window) {
                    const a = () => window.open(n, "_self");
                    if (isTrackingActive() && n.indexOf("/products/") > -1 && !!window.gtag) {
                        window.gtag("event", "pf_view_product", Object.assign({
                            send_to: "pagefly",
                            pf_view_product: 1,
                            pf_product_handle: n,
                            pf_event: "view_product",
                            event_callback: a
                        }, window.pfPageInfo));
                        return
                    }
                    a()
                }
            }
        }
        run() {
            var e, n;
            this.itemLength !== 0 && (["mobile", "tablet"].includes(this.device) ? this.handleSwipe() : this.handleHover(), this.$master.addEventListener("click", this.triggerClickAction), this.$Items.forEach(a => a.addEventListener("click", this.handleItemClick)), (e = this.$el.querySelector(G.selector.nextArrow)) == null || e.addEventListener("click", a => {
                this.animating || this.$Items[this.index + 1] && this.handleItemSelect(this.$Items[this.index + 1])
            }), (n = this.$el.querySelector(G.selector.prevArrow)) == null || n.addEventListener("click", a => {
                this.animating || this.$Items[this.index - 1] && this.handleItemSelect(this.$Items[this.index - 1])
            }))
        }
        showImageGallery() {
            var e;
            if (!this.imageGallery) {
                const n = (e = pageflyProducts[this.pId].media) == null ? void 0 : e.filter(a => (a == null ? void 0 : a.media_type) === "image");
                this.imageGallery = new MediaGallery(n, document.body)
            }
            this.imageGallery.show(this.index)
        }
        updateByVariant(e) {
            const n = e.featured_image;
            if (n) {
                const {
                    id: a
                } = n;
                if (a) {
                    const r = this.$el.querySelector(`[data-img-id="${a}"]`);
                    r && !r.getAttribute("data-active") && this.handleItemSelect(r)
                }
            }
        }
        switchImage(e = this.index, n = this.active, a = !0, r = !0) {
            var c, d;
            const o = this.$Items[e].querySelector("img"),
                i = this.$Items[e].getAttribute("data-variant-id");
            if (!this.$MasterImg.classList.contains("pf-img-lazy") && (this.$MasterImg.setAttribute("src", o.src), this.$MasterImg.setAttribute("srcset", o.srcset)), i && this.$MasterImg.setAttribute("data-variant-id", i), a) {
                this.$Items[n].removeAttribute("data-active"), this.$Paginator[n].removeAttribute("data-active"), this.$Items[e].setAttribute("data-active", "true"), this.$Paginator[e].setAttribute("data-active", "true");
                const l = this.$master.querySelector("div.zoom-image");
                if (l) {
                    const h = o.src;
                    l.style.backgroundImage = `url('${h}')`, l.style.width = `${this.$MasterImg.width}px`, l.style.height = `${this.$MasterImg.height}px`
                }
                const u = this.$Items[e].getAttribute("data-img-id"),
                    f = (c = this.product) == null ? void 0 : c.variants.find(h => {
                        var v;
                        return ((v = h.featured_image) == null ? void 0 : v.id.toString()) === u
                    });
                if (f && r) {
                    const {
                        featured_image: {
                            variant_ids: h
                        }
                    } = f, v = this.product.pfCurrentVariant && ((d = this.product.pfCurrentVariant[this.boxId || OUTSIDE_BOX_KEY]) == null ? void 0 : d.id);
                    h.includes(v) || updateByCurrentVariant(this.pId, f, this.boxName, !1, !0)
                }
            }
        }
        handleItemClick(e) {
            let n = e.target;
            n = n.closest(G.selector.item), this.handleItemSelect(n)
        }
        handleSlideList(e) {
            const n = (e - 1) / 2;
            let a = !0;
            this.activeIndex + (this.index - this.active) < n && (a = !1);
            let r = this.index - (a ? Math.floor(n) : Math.ceil(n)),
                o = this.index + (a ? Math.ceil(n) : Math.floor(n));
            this.activeIndex = a ? Math.floor(n) : Math.ceil(n), r < 0 ? (o = o - r, r = 0, this.activeIndex = this.index) : o > this.itemLength - 1 && (r = r - (o - this.itemLength + 1), o = this.itemLength - 1, this.activeIndex = this.index % e + 1), this.$Items.forEach((i, s) => {
                s < r || s > o ? i.hasAttribute("hidden") || this.transform.hiddenList.push(i) : i.hasAttribute("hidden") && this.transform.showList.push(i)
            }), this.transform.hiddenList.length > 0 && (this.animating = !0, this.transform.endCallback.push(() => {
                this.animating = !1
            }), this.transform.run(a))
        }
        handleHover() {
            const {
                onHover: a,
                hoverAction: r
            } = this.setting;
            let o = this.index,
                i = !1;
            if (r === 0) return;
            if (r === 1) {
                this.$master.setAttribute("data-magnifier", "true");
                const f = () => {
                    window.innerWidth < 991 || setTimeout(() => {
                        initZoomImage(this.$master)
                    }, 500)
                };
                lazyLoad ? this.$MasterImg.onload = () => {
                    f()
                } : f();
                return
            }
            let s = null,
                c;
            a === 3 ? this.$MasterImg.addEventListener("mousemove", u) : this.$MasterImg.addEventListener("mouseenter", () => {
                s = setTimeout(l, 300)
            }), this.$MasterImg.addEventListener("mouseleave", () => {
                typeof s == "number" && (clearTimeout(s), s = null), i && (this.switchImage(this.index, this.active, !1), i = !1)
            });
            const d = () => {
                    o < 0 ? o = this.itemLength - 1 : o > this.itemLength - 1 && (o = 0), this.switchImage(o, this.active, !1), i = !0
                },
                l = () => {
                    switch (o = this.index, a) {
                        case 0:
                            o++;
                            break;
                        case 1:
                            o--;
                            break;
                        case 2:
                            o = Math.floor(Math.random() * (this.itemLength - 1));
                            break
                    }
                    d()
                };

            function u(f) {
                const h = () => {
                    c = c || {}, c.x = f.offsetX, c.y = f.offsetY
                };
                c ? (Math.abs(f.offsetX - c.x) >= 100 || Math.abs(f.offsetY - c.y) >= 100) && (o++, d(), h()) : h()
            }
        }
        handleSwipe() {
            const {
                listLayout: e,
                limit: n
            } = this.setting, a = n[this.device], r = this.$MasterImg, o = 60;
            let i = 0,
                s = 0,
                c = !1,
                d;
            const l = pageflyProducts[this.pId].images,
                u = new SwipeTransition(this.$master, this.$MasterImg, l[this.index - 1], l[this.index + 1]),
                f = y => {
                    y.stopPropagation(), !u.swiping && y.changedTouches && (i = y.changedTouches[0].clientX, s = y.changedTouches[0].clientY, u.setSrc(l[this.index - 1], l[this.index + 1]), u.start(), c = !1, d = void 0)
                },
                h = y => {
                    if (y.stopPropagation(), y.changedTouches) {
                        c = !0;
                        const p = y.changedTouches[0].clientX - i,
                            S = y.changedTouches[0].clientY - s;
                        if (d || this.index === 0 && p > 0 || this.index === this.itemLength - 1 && p < 0 || p === 0) return;
                        typeof d > "u" && Math.abs(p) > 10 && (d = !1), typeof d > "u" && Math.abs(S) > 10 && (d = !0, u.resetStyle()), d === !1 && (y.cancelable && y.preventDefault(), u.move(p))
                    }
                },
                v = y => {
                    if (y.stopPropagation(), c || this.triggerClickAction(), y.changedTouches) {
                        const p = y.changedTouches[0].clientX - i;
                        d === !0 || p < o && p > -o || this.index === 0 && p > 0 || this.index === this.itemLength - 1 && p < 0 ? u.reset(!d) : (this.active = this.index, p > o && this.index--, p < -o && this.index++, this.index = this.index < 0 ? 0 : this.index >= this.itemLength ? this.itemLength - 1 : this.index, u.end(p > 0), this.switchImage(this.index, this.active), e === LIST_LAYOUT.SLIDE && this.handleSlideList(a))
                    }
                    d = void 0
                };
            r.addEventListener("touchstart", f, {
                passive: !0
            }), r.addEventListener("touchmove", h, {
                passive: !1
            }), r.addEventListener("touchend", v)
        }
    };
    let ProductImage = G;
    b(ProductImage, "selector", {
        box: '[data-pf-type="ProductBox"]',
        master: '[data-pf-type="MasterImage"]',
        list: '[data-pf-type="ProductImageList"]',
        pagination: '[data-pf-type="ProductImagePagination"]',
        item: '[data-pf-type="ImageItem"]',
        nextArrow: '[data-pf-nav="next"]',
        prevArrow: '[data-pf-nav="prev"]'
    });
    const U = class {
        constructor(e, n, a, r) {
            b(this, "swiping", !1);
            b(this, "$Wrapper");
            b(this, "$MasterImg");
            b(this, "$master");
            b(this, "$Mask");
            b(this, "$Mask2");
            b(this, "$Img");
            b(this, "$Img2");
            b(this, "nextSrc");
            b(this, "prevSrc");
            b(this, "offsetWidth");
            b(this, "offsetHeight");
            b(this, "isNext", !0);
            b(this, "effect", window.__pf_image_swipeEffect || "");
            this.$master = e, this.$MasterImg = n, this.offsetWidth = this.$master.offsetWidth, this.offsetHeight = this.$master.offsetHeight, this.setSrc(a, r)
        }
        get sign() {
            return this.isNext ? -1 : 1
        }
        setSrc(e, n) {
            this.nextSrc = n, this.prevSrc = e
        }
        start() {
            this.swiping = !0, this.isNext = null, this.$master.style.pointerEvents = "none", this.offsetWidth = this.$master.offsetWidth || this.offsetWidth, this.offsetHeight = this.$master.offsetHeight || this.offsetHeight, this.$Wrapper = document.createElement("div"), this.$Wrapper.style.cssText = `position: absolute; width: ${this.offsetWidth}px; height: ${this.offsetHeight}px; overflow: hidden; pointer-events: none;`, this.$Mask = document.createElement("div"), this.$Mask2 = document.createElement("div"), this.$Mask.id = "mask1", this.$Mask2.id = "mask2", this.$Img = this.$MasterImg.cloneNode(), this.$Img2 = this.$MasterImg.cloneNode(), this.$Img2.src = this.nextSrc, this.$Mask.style.cssText = `position: absolute; width: ${this.offsetWidth}px; height: ${this.offsetHeight}px; display: flex; justify-content: center; align-items: center; overflow: hidden;`, this.$Mask2.style.cssText = `position: absolute; width: ${this.offsetWidth}px; height: ${this.offsetHeight}px; display: flex; justify-content: center; align-items: center; right: -${this.offsetWidth}px; overflow: hidden;`, this.$Mask.appendChild(this.$Img), this.$Mask2.appendChild(this.$Img2), this.$Wrapper.appendChild(this.$Mask), this.$Wrapper.appendChild(this.$Mask2), this.$master.appendChild(this.$Wrapper), this.$MasterImg.style.cssText = "visibility: hidden"
        }
        setDirect(e) {
            if (e !== this.isNext) {
                this.isNext = e, this.$Mask2.style.removeProperty("right"), this.$Mask2.style.removeProperty("left"), this.$Mask2.style.cssText += e ? `right: -${this.offsetWidth}px;` : `left: -${this.offsetWidth}px;`;
                const n = e ? this.nextSrc : this.prevSrc;
                this.$Img2.src = n;
                const a = this.$Img.src.indexOf("/"),
                    r = this.$Img.src.lastIndexOf("_"),
                    o = this.$Img.src.slice(a, r),
                    i = n.lastIndexOf("."),
                    s = n.slice(0, i);
                this.$Img2.setAttribute("srcset", this.$Img2.srcset.replaceAll(o, s))
            }
        }
        moveByEffect(e) {
            const n = window.__pf_image_swipeEffect;
            n === "slide" ? (this.$Img.style.cssText = `transform: translateX(${-e}px);`, this.$Img2.style.cssText = `transform: translateX(${-this.sign*(Math.abs(e)-this.offsetWidth)}px);`) : n !== "carousel" && (this.$Img.style.cssText = `transform: translateX(${-e/2}px);`, this.$Img2.style.cssText = `transform: translateX(${-this.sign*(Math.abs(e/2)-this.offsetWidth/2)}px);`)
        }
        move(e) {
            const n = e < 0;
            this.setDirect(n), this.$Mask.style.cssText += `transform: translateX(${e}px);`, this.$Mask2.style.cssText += `transform: translateX(${e}px);`, this.moveByEffect(e)
        }
        get endCSS() {
            let e = `transform: translateX(${-this.sign*this.offsetWidth/2}px);`;
            switch (this.effect) {
                case "slide":
                    e = `transform: translateX(${-this.sign*this.offsetWidth}px);`;
                    break;
                case "carousel":
                    e = ""
            }
            return e
        }
        get resetCSS() {
            let e = `transform: translateX(${this.isNext?"-":""}${this.offsetWidth/2}px);`;
            switch (this.effect) {
                case "slide":
                    e = `transform: translateX(${this.sign*this.offsetWidth}px);`;
                    break;
                case "carousel":
                    e = "transform: translateX(0px);"
            }
            return e
        }
        end(e) {
            this.$Mask.style.cssText += `transition: all ${U.TIME}s;`, this.$Mask2.style.cssText += `transition: all ${U.TIME}s;`, this.$Img.style.cssText = `transition: all ${U.TIME}s;${this.endCSS}`, this.$Img2.style.cssText = `transition: all ${U.TIME}s; transform: translateX(0);`, this.$Mask.style.cssText += `transform: translateX(${e?"":"-"}${this.offsetWidth}px);`, this.$Mask2.style.cssText += `transform: translateX(${e?"":"-"}${this.offsetWidth}px);`, setTimeout(() => {
                this.resetStyle()
            }, U.TIME * 1e3)
        }
        resetStyle() {
            this.$MasterImg.style.cssText = "", this.$Wrapper && this.$master.removeChild(this.$Wrapper), this.$master.style.removeProperty("pointer-events"), this.$Wrapper = null, this.swiping = !1
        }
        reset(e = !0) {
            this.$Mask.style.cssText += `transition: all ${U.TIME}s;`, this.$Mask2.style.cssText += `transition: all ${U.TIME}s;`, this.$Img.style.cssText = `transition: all ${U.TIME}s; transform: translateX(0);`, this.$Img2.style.cssText = `transition: all ${U.TIME}s;${this.resetCSS}`, setTimeout(() => {
                this.$Mask.style.cssText += "transform: translateX(0);", this.$Mask2.style.cssText += "transform: translateX(0);", setTimeout(() => {
                    e && this.resetStyle()
                }, U.TIME * 1e3)
            }, 10)
        }
    };
    let SwipeTransition = U;
    b(SwipeTransition, "TIME", .7);
    class Transform {
        constructor(e, n, a, r = 1) {
            b(this, "hiddenList", []);
            b(this, "showList", []);
            b(this, "endCallback", []);
            b(this, "$List");
            b(this, "width");
            b(this, "height");
            b(this, "gutter");
            b(this, "layout");
            b(this, "time");
            b(this, "getElCss", (e, n) => {
                const a = this.hiddenList.length;
                let r = "position: absolute;";
                return this.layout === "h" ? r += `${n?"right":"left"}: -${(this.gutter+this.width)*(n?e+1:a-e)}px;` : r += `${n?"bottom":"top"}: -${(this.gutter+this.height)*(n?e+1:a-e)}px;`, r
            });
            b(this, "getListCss", e => {
                const n = this.hiddenList.length;
                let a = `transition: transform ${this.time}s ease-in-out; pointer-events: none;`;
                return this.layout === "h" ? a += `transform: translateX(${e?"-":""}${(this.width+this.gutter)*n}px); ` : a += `transform: translateY(${e?"-":""}${(this.height+this.gutter)*n}px); `, a
            });
            const o = getDevice();
            this.$List = e, this.width = a == null ? void 0 : a.offsetWidth, this.height = a == null ? void 0 : a.offsetHeight, this.gutter = Number.parseInt(n == null ? void 0 : n.spacing[o]), this.layout = (n == null ? void 0 : n.listPosition) === 0 || (n == null ? void 0 : n.listPosition) === 2 ? "h" : "v", this.time = r
        }
        reset() {
            this.hiddenList.length = 0, this.showList.length = 0, this.endCallback.forEach(e => typeof e == "function" && e()), this.endCallback.length = 0
        }
        run(e) {
            const n = this.hiddenList.length;
            n > 0 && this.showList.length === n && (this.showList.forEach((a, r) => {
                a.removeAttribute("hidden"), a.style.cssText = this.getElCss(r, e)
            }), this.$List.style.cssText = this.getListCss(e), setTimeout(() => {
                this.hiddenList.forEach(a => {
                    a.setAttribute("hidden", "hidden")
                }), this.showList.forEach(a => {
                    a.style.cssText = ""
                }), this.$List.style.cssText = "", this.reset()
            }, this.time * 1e3))
        }
    }
    const easeOutCubic = t => --t * t * t + 1,
        smoothScroll = (t, e = 600) => {
            const n = window.scrollY,
                a = t - n,
                r = Date.now(),
                o = () => {
                    const i = (Date.now() - r) / e,
                        s = easeOutCubic(i);
                    window.scrollTo({
                        top: n + s * a
                    }), i < 1 && window.requestAnimationFrame(o)
                };
            o()
        };

    function reloadLaiElement() {
        if (typeof window.SMARTIFYAPPS < "u" && window.SMARTIFYAPPS.rv.installed) return window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews()
    }

    function reloadAreviewsElement() {
        document.querySelectorAll(".areviews_product_item").length > 0 && typeof window.show_infiniti_areviews == "function" && window.show_infiniti_areviews()
    }
    async function renderPagination() {
        const t = document.getElementsByClassName("pf-bpa");
        if (!t.length) return null;
        Array.from(t).map(e => renderPageIndexes(e, 0))
    }

    function getPageMap(t, e) {
        const n = [1];
        if (t <= 5)
            for (let a = 2; a <= t; a++) n.push(a);
        else e - 1 > 1 && n.push(e - 1), e > 1 && n.push(e), e + 1 <= t && n.push(e + 1), e + 2 <= t && n.push(t);
        return n
    }

    function appendPageIndex(t, e, n) {
        const a = document.createElement("a");
        if (e === n && (a.className += "currentPage"), a.innerText = `${e}`, !isNaN(e)) {
            a.href = "#", a.setAttribute("data-order", `${e}`);
            const r = t.getAttribute("data-private"),
                i = t.getAttribute("data-next-page").split("page=")[0],
                s = document.querySelectorAll(`[data-private="${r}"]`)[0];
            a.addEventListener("click", c => {
                c.preventDefault(), fetch(`${i}page=${e}`).then(d => d.text()).then(d => {
                    const l = new DOMParser().parseFromString(d, "text/html");
                    let u = "";
                    l.querySelectorAll(`${r} .pf-c`).forEach(h => (u = u + h.outerHTML, h.outerHTML));
                    const f = document.querySelectorAll(`${r}`)[0];
                    [].slice.call(f.getElementsByClassName("pf-c")).map(h => h.remove()), s.parentElement.insertAdjacentHTML("beforebegin", u)
                }), t.innerHTML = "", renderPageIndexes(t, e)
            })
        }
        t.appendChild(a)
    }

    function renderPageIndexes(t, e = 0) {
        const n = parseInt(t.getAttribute("data-page"));
        e = e || parseInt(t.getAttribute("data-current"));
        const a = getPageMap(n, e);
        appendPageIndex(t, 1, e);
        for (let r = 1; r < a.length; r++) a[r - 1] + 1 < a[r] && appendPageIndex(t, "...", e), appendPageIndex(t, a[r], e)
    }
    async function handleProductPagination() {
        const t = document.querySelectorAll(".pf-cmIpgn a");
        Array.from(t).forEach(e => {
            e.addEventListener("click", n => {
                n.preventDefault(), e.parentElement.parentElement.classList.add("pf-loading");
                const a = new URL(window.location.href),
                    r = new URL(e.href).searchParams.get("page");
                a.searchParams.set("page", r);
                const o = `${e.parentElement.getAttribute("data-selector")}`,
                    i = e.closest("[data-pf-type]"),
                    s = `${i==null?void 0:i.getAttribute("data-pf-type")}`,
                    c = {
                        scrollY: window.scrollY
                    };
                fetch(a.href).then(d => d.text()).then(d => {
                    var I;
                    let l = !1;
                    if (e.classList.contains("pf-cmIldm")) {
                        const w = e.getAttribute("data-total"),
                            C = a.searchParams.get("page");
                        if (l = !0, w === C) s != null && s.includes("ArticleList") ? e.innerText = "No more post" : e.innerText = "No more product", e.setAttribute("disabled", "disabled");
                        else {
                            const O = parseInt(C) + 1;
                            a.searchParams.set("page", O.toString()), e.href = a.href
                        }
                    } else [...e.parentElement.children].forEach(C => {
                        C !== e && C.classList.remove("pf-cmIatv")
                    }), e.classList.add("pf-cmIatv");
                    const u = document.querySelector(o),
                        h = new DOMParser().parseFromString(d, "text/html").querySelector(o),
                        v = h.querySelectorAll(":scope > div:not(.pf-cmIpgn)"),
                        y = [];
                    v.forEach(w => {
                        const C = w.querySelectorAll("script");
                        if (C.length) {
                            const O = document.createElement("script");
                            C.forEach(k => O.innerHTML += k.innerHTML), y.push(O)
                        }
                    }), u.querySelectorAll("script").forEach((w, C) => {
                        y[C] && w.replaceWith(y[C])
                    }), l && e.parentElement.before(...v);
                    const S = Array.from(u.querySelectorAll('[data-pf-type^="ArticleBox"], [data-pf-type^="ProductBox"]')),
                        T = Array.from(h.querySelectorAll('[data-pf-type^="ArticleBox"], [data-pf-type^="ProductBox"]'));
                    if (!l && hideElementIfNotFound(S, T), T.forEach((w, C) => S[C].replaceWith(w)), e.parentElement.parentElement.classList.remove("pf-loading"), !e.classList.contains("pf-cmIldm")) {
                        const w = u.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 100;
                        smoothScroll(w, 800)
                    }
                    "__pf_loadmore_callback" in window && Array.isArray(window.__pf_loadmore_callback) && window.__pf_loadmore_callback.forEach(w => {
                        typeof w == "function" && w(c)
                    }), runPaginationHelper(), handleShopifyProductBadge(), (I = window.jdgm) != null && I.customizeBadges && window.jdgm.customizeBadges()
                }).then(() => {
                    var d, l;
                    (d = window.$) != null && d.aliReviewsAddRatingCollection && window.$.aliReviewsAddRatingCollection(), (l = window.SealSubs) != null && l.refresh && window.SealSubs.refresh(), reloadLaiElement(), reloadAreviewsElement(), typeof window.printReviewRatings == "function" && window.printReviewRatings(), window.__handleSideEffectForOtherApp && typeof window.__handleSideEffectForOtherApp == "function" && window.__handleSideEffectForOtherApp()
                }).catch(d => console.log(d))
            })
        })
    }
    async function handleShopifyProductList() {
        renderPagination().catch(console.error), handleProductPagination().catch(console.error)
    }
    async function handleShopifyProductQuantity() {
        const t = document.querySelectorAll('div[data-pf-type="ProductQuantity"]');
        await storeElsInProductByType(t, "quantity"), setTimeout(() => {
            function e(n) {
                n.forEach(a => {
                    var c, d;
                    let r;
                    async function o(l) {
                        r && n.forEach(u => {
                            const f = r.querySelector("input") || u.querySelector("input"),
                                h = r.querySelector("[data-quantity-action='decrease']") || u.querySelector("[data-quantity-action='decrease']");
                            f.value = l, l === 1 ? h == null || h.setAttribute("disabled", "disabled") : h == null || h.removeAttribute("disabled")
                        })
                    }

                    function i(l) {
                        const u = l.target,
                            f = l.currentTarget;
                        r = l.currentTarget;
                        const h = u.closest("[data-quantity-action]");
                        if (h) {
                            const v = h.getAttribute("data-quantity-action"),
                                y = f.querySelector("input"),
                                p = parseInt(y.value, 10) || 0;
                            let S = v === "increase" ? p + 1 : p - 1;
                            S < 1 && (S = 1), o(S).catch(console.error)
                        }
                    }

                    function s(l) {
                        const f = l.target.closest("input");
                        if (f) {
                            const h = parseInt(f.value, 10) || 0;
                            o(h).catch(console.error)
                        }
                    }
                    if (a) {
                        const l = (c = a.querySelector("input")) == null ? void 0 : c.value,
                            u = a.querySelector("[data-quantity-action='decrease']");
                        Number(l) === 1 && u && u.setAttribute("disabled", "disabled"), a.getAttribute("listener") || (a.addEventListener("click", i), (d = a.querySelector("input")) == null || d.addEventListener("blur", s), a.setAttribute("listener", "true"))
                    }
                })
            }
            Object.keys(pageflyProducts).forEach(n => {
                if (n) {
                    const a = pageflyProducts[n];
                    a && a.quantityArr && a.quantityArr.forEach(e)
                }
            })
        }, 100)
    }
    var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
        objectProto$6 = Object.prototype;

    function isPrototype$2(t) {
        var e = t && t.constructor,
            n = typeof e == "function" && e.prototype || objectProto$6;
        return t === n
    }
    var _isPrototype = isPrototype$2;

    function overArg$1(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
    var _overArg = overArg$1,
        overArg = _overArg,
        nativeKeys$1 = overArg(Object.keys, Object),
        _nativeKeys = nativeKeys$1,
        isPrototype$1 = _isPrototype,
        nativeKeys = _nativeKeys,
        objectProto$5 = Object.prototype,
        hasOwnProperty$4 = objectProto$5.hasOwnProperty;

    function baseKeys$1(t) {
        if (!isPrototype$1(t)) return nativeKeys(t);
        var e = [];
        for (var n in Object(t)) hasOwnProperty$4.call(t, n) && n != "constructor" && e.push(n);
        return e
    }
    var _baseKeys = baseKeys$1,
        freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal,
        _freeGlobal = freeGlobal$1,
        freeGlobal = _freeGlobal,
        freeSelf = typeof self == "object" && self && self.Object === Object && self,
        root$7 = freeGlobal || freeSelf || Function("return this")(),
        _root = root$7,
        root$6 = _root,
        Symbol$3 = root$6.Symbol,
        _Symbol = Symbol$3,
        Symbol$2 = _Symbol,
        objectProto$4 = Object.prototype,
        hasOwnProperty$3 = objectProto$4.hasOwnProperty,
        nativeObjectToString$1 = objectProto$4.toString,
        symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;

    function getRawTag$1(t) {
        var e = hasOwnProperty$3.call(t, symToStringTag$1),
            n = t[symToStringTag$1];
        try {
            t[symToStringTag$1] = void 0;
            var a = !0
        } catch {}
        var r = nativeObjectToString$1.call(t);
        return a && (e ? t[symToStringTag$1] = n : delete t[symToStringTag$1]), r
    }
    var _getRawTag = getRawTag$1,
        objectProto$3 = Object.prototype,
        nativeObjectToString = objectProto$3.toString;

    function objectToString$1(t) {
        return nativeObjectToString.call(t)
    }
    var _objectToString = objectToString$1,
        Symbol$1 = _Symbol,
        getRawTag = _getRawTag,
        objectToString = _objectToString,
        nullTag = "[object Null]",
        undefinedTag = "[object Undefined]",
        symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;

    function baseGetTag$4(t) {
        return t == null ? t === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(t) ? getRawTag(t) : objectToString(t)
    }
    var _baseGetTag = baseGetTag$4;

    function isObject$2(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function")
    }
    var isObject_1 = isObject$2,
        baseGetTag$3 = _baseGetTag,
        isObject$1 = isObject_1,
        asyncTag = "[object AsyncFunction]",
        funcTag$1 = "[object Function]",
        genTag = "[object GeneratorFunction]",
        proxyTag = "[object Proxy]";

    function isFunction$2(t) {
        if (!isObject$1(t)) return !1;
        var e = baseGetTag$3(t);
        return e == funcTag$1 || e == genTag || e == asyncTag || e == proxyTag
    }
    var isFunction_1 = isFunction$2,
        root$5 = _root,
        coreJsData$1 = root$5["__core-js_shared__"],
        _coreJsData = coreJsData$1,
        coreJsData = _coreJsData,
        maskSrcKey = function() {
            var t = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();

    function isMasked$1(t) {
        return !!maskSrcKey && maskSrcKey in t
    }
    var _isMasked = isMasked$1,
        funcProto$1 = Function.prototype,
        funcToString$1 = funcProto$1.toString;

    function toSource$2(t) {
        if (t != null) {
            try {
                return funcToString$1.call(t)
            } catch {}
            try {
                return t + ""
            } catch {}
        }
        return ""
    }
    var _toSource = toSource$2,
        isFunction$1 = isFunction_1,
        isMasked = _isMasked,
        isObject = isObject_1,
        toSource$1 = _toSource,
        reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
        reIsHostCtor = /^\[object .+?Constructor\]$/,
        funcProto = Function.prototype,
        objectProto$2 = Object.prototype,
        funcToString = funcProto.toString,
        hasOwnProperty$2 = objectProto$2.hasOwnProperty,
        reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function baseIsNative$1(t) {
        if (!isObject(t) || isMasked(t)) return !1;
        var e = isFunction$1(t) ? reIsNative : reIsHostCtor;
        return e.test(toSource$1(t))
    }
    var _baseIsNative = baseIsNative$1;

    function getValue$1(t, e) {
        return t == null ? void 0 : t[e]
    }
    var _getValue = getValue$1,
        baseIsNative = _baseIsNative,
        getValue = _getValue;

    function getNative$5(t, e) {
        var n = getValue(t, e);
        return baseIsNative(n) ? n : void 0
    }
    var _getNative = getNative$5,
        getNative$4 = _getNative,
        root$4 = _root,
        DataView$1 = getNative$4(root$4, "DataView"),
        _DataView = DataView$1,
        getNative$3 = _getNative,
        root$3 = _root,
        Map$2 = getNative$3(root$3, "Map"),
        _Map = Map$2,
        getNative$2 = _getNative,
        root$2 = _root,
        Promise$2 = getNative$2(root$2, "Promise"),
        _Promise = Promise$2,
        getNative$1 = _getNative,
        root$1 = _root,
        Set$1 = getNative$1(root$1, "Set"),
        _Set = Set$1,
        getNative = _getNative,
        root = _root,
        WeakMap$1 = getNative(root, "WeakMap"),
        _WeakMap = WeakMap$1,
        DataView = _DataView,
        Map$1 = _Map,
        Promise$1 = _Promise,
        Set = _Set,
        WeakMap = _WeakMap,
        baseGetTag$2 = _baseGetTag,
        toSource = _toSource,
        mapTag$2 = "[object Map]",
        objectTag$1 = "[object Object]",
        promiseTag = "[object Promise]",
        setTag$2 = "[object Set]",
        weakMapTag$1 = "[object WeakMap]",
        dataViewTag$1 = "[object DataView]",
        dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map$1),
        promiseCtorString = toSource(Promise$1),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap),
        getTag$1 = baseGetTag$2;
    (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag$1(new Map$1) != mapTag$2 || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set && getTag$1(new Set) != setTag$2 || WeakMap && getTag$1(new WeakMap) != weakMapTag$1) && (getTag$1 = function(t) {
        var e = baseGetTag$2(t),
            n = e == objectTag$1 ? t.constructor : void 0,
            a = n ? toSource(n) : "";
        if (a) switch (a) {
            case dataViewCtorString:
                return dataViewTag$1;
            case mapCtorString:
                return mapTag$2;
            case promiseCtorString:
                return promiseTag;
            case setCtorString:
                return setTag$2;
            case weakMapCtorString:
                return weakMapTag$1
        }
        return e
    });
    var _getTag = getTag$1;

    function isObjectLike$3(t) {
        return t != null && typeof t == "object"
    }
    var isObjectLike_1 = isObjectLike$3,
        baseGetTag$1 = _baseGetTag,
        isObjectLike$2 = isObjectLike_1,
        argsTag$1 = "[object Arguments]";

    function baseIsArguments$1(t) {
        return isObjectLike$2(t) && baseGetTag$1(t) == argsTag$1
    }
    var _baseIsArguments = baseIsArguments$1,
        baseIsArguments = _baseIsArguments,
        isObjectLike$1 = isObjectLike_1,
        objectProto$1 = Object.prototype,
        hasOwnProperty$1 = objectProto$1.hasOwnProperty,
        propertyIsEnumerable = objectProto$1.propertyIsEnumerable,
        isArguments$1 = baseIsArguments(function() {
            return arguments
        }()) ? baseIsArguments : function(t) {
            return isObjectLike$1(t) && hasOwnProperty$1.call(t, "callee") && !propertyIsEnumerable.call(t, "callee")
        },
        isArguments_1 = isArguments$1,
        isArray$1 = Array.isArray,
        isArray_1 = isArray$1,
        MAX_SAFE_INTEGER = 9007199254740991;

    function isLength$2(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER
    }
    var isLength_1 = isLength$2,
        isFunction = isFunction_1,
        isLength$1 = isLength_1;

    function isArrayLike$1(t) {
        return t != null && isLength$1(t.length) && !isFunction(t)
    }
    var isArrayLike_1 = isArrayLike$1,
        isBuffer$1 = {
            exports: {}
        };

    function stubFalse() {
        return !1
    }
    var stubFalse_1 = stubFalse;
    (function(t, e) {
        var n = _root,
            a = stubFalse_1,
            r = e && !e.nodeType && e,
            o = r && !0 && t && !t.nodeType && t,
            i = o && o.exports === r,
            s = i ? n.Buffer : void 0,
            c = s ? s.isBuffer : void 0,
            d = c || a;
        t.exports = d
    })(isBuffer$1, isBuffer$1.exports);
    var baseGetTag = _baseGetTag,
        isLength = isLength_1,
        isObjectLike = isObjectLike_1,
        argsTag = "[object Arguments]",
        arrayTag = "[object Array]",
        boolTag = "[object Boolean]",
        dateTag = "[object Date]",
        errorTag = "[object Error]",
        funcTag = "[object Function]",
        mapTag$1 = "[object Map]",
        numberTag = "[object Number]",
        objectTag = "[object Object]",
        regexpTag = "[object RegExp]",
        setTag$1 = "[object Set]",
        stringTag = "[object String]",
        weakMapTag = "[object WeakMap]",
        arrayBufferTag = "[object ArrayBuffer]",
        dataViewTag = "[object DataView]",
        float32Tag = "[object Float32Array]",
        float64Tag = "[object Float64Array]",
        int8Tag = "[object Int8Array]",
        int16Tag = "[object Int16Array]",
        int32Tag = "[object Int32Array]",
        uint8Tag = "[object Uint8Array]",
        uint8ClampedTag = "[object Uint8ClampedArray]",
        uint16Tag = "[object Uint16Array]",
        uint32Tag = "[object Uint32Array]",
        typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;

    function baseIsTypedArray$1(t) {
        return isObjectLike(t) && isLength(t.length) && !!typedArrayTags[baseGetTag(t)]
    }
    var _baseIsTypedArray = baseIsTypedArray$1;

    function baseUnary$1(t) {
        return function(e) {
            return t(e)
        }
    }
    var _baseUnary = baseUnary$1,
        _nodeUtil = {
            exports: {}
        };
    (function(t, e) {
        var n = _freeGlobal,
            a = e && !e.nodeType && e,
            r = a && !0 && t && !t.nodeType && t,
            o = r && r.exports === a,
            i = o && n.process,
            s = function() {
                try {
                    var c = r && r.require && r.require("util").types;
                    return c || i && i.binding && i.binding("util")
                } catch {}
            }();
        t.exports = s
    })(_nodeUtil, _nodeUtil.exports);
    var baseIsTypedArray = _baseIsTypedArray,
        baseUnary = _baseUnary,
        nodeUtil = _nodeUtil.exports,
        nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray,
        isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray,
        isTypedArray_1 = isTypedArray$1,
        baseKeys = _baseKeys,
        getTag = _getTag,
        isArguments = isArguments_1,
        isArray = isArray_1,
        isArrayLike = isArrayLike_1,
        isBuffer = isBuffer$1.exports,
        isPrototype = _isPrototype,
        isTypedArray = isTypedArray_1,
        mapTag = "[object Map]",
        setTag = "[object Set]",
        objectProto = Object.prototype,
        hasOwnProperty = objectProto.hasOwnProperty;

    function isEmpty(t) {
        if (t == null) return !0;
        if (isArrayLike(t) && (isArray(t) || typeof t == "string" || typeof t.splice == "function" || isBuffer(t) || isTypedArray(t) || isArguments(t))) return !t.length;
        var e = getTag(t);
        if (e == mapTag || e == setTag) return !t.size;
        if (isPrototype(t)) return !baseKeys(t).length;
        for (var n in t)
            if (hasOwnProperty.call(t, n)) return !1;
        return !0
    }
    var isEmpty_1 = isEmpty;
    class Slideshow {
        constructor(e, n = {}) {
            b(this, "container");
            b(this, "slides");
            b(this, "nextButton");
            b(this, "prevButton");
            b(this, "paginationButtons");
            b(this, "currentIndex", 0);
            b(this, "elementSettings", {});
            b(this, "timer");
            b(this, "disconnectResizeObserver");
            b(this, "disconnectVisibleObserver");
            b(this, "destroy", () => {
                var e, n, a, r;
                this.disconnectResizeObserver && this.disconnectResizeObserver(), this.disconnectVisibleObserver && this.disconnectVisibleObserver(), (e = this.container) == null || e.removeEventListener("scroll", this.scrollEnd), (n = this.nextButton) == null || n.removeEventListener("click", this.handleNextNavigationButons), (a = this.prevButton) == null || a.removeEventListener("click", this.handlePrevNavigationButons), (r = this.paginationButtons) == null || r.forEach((o, i) => o.removeEventListener("click", s => {
                    this.handleClickPaginationButon(s, i)
                }))
            });
            b(this, "getElementSettings", () => {
                var a;
                const e = (a = this.container.getAttribute("data-slider")) == null ? void 0 : a.replace(/'/g, '"'),
                    n = e ? JSON.parse(e) : {};
                return n.device || (n.device = getDevice()), n
            });
            b(this, "initSlideshow", () => {
                try {
                    const {
                        maxHeight: e,
                        isEditor: n = !1
                    } = this.elementSettings;
                    !n && this.renderPaginationButtonsLiveView(), this.paginationButtons = this.container.querySelectorAll(":scope > .pf-slider-nav > button"), this.initVisibleObservers(), !e && this.updateSliderHeight(!0), !e && n && this.resizeSlideObserver(), this.initScrollAction(), this.handleNavigationButtons(), this.handlePaginationButtons(), this.container.addEventListener("scroll", this.scrollEnd)
                } catch (e) {
                    console.error(`Error init slideshow ${this.container}: `, e)
                }
            });
            b(this, "scrollEnd", () => {
                const {
                    navStyle: e,
                    maxHeight: n,
                    paginationStyle: a
                } = this.elementSettings;
                clearTimeout(this.timer), this.timer = setTimeout(() => {
                    const r = !this.container.getAttribute("no-update-pagination-and-current-index-again");
                    r && this.updateCurrentIndexByScroll(), e !== "none" && this.updateNavigationButtonsState(), !n && this.updateSliderHeight(), a !== "none" && r && this.updatePaginationButtonsState(), this.container.removeAttribute("no-update-pagination-and-current-index-again")
                }, 100)
            });
            b(this, "updateCurrentIndexByScroll", () => {
                const {
                    device: e,
                    displayPartialItems: n,
                    slidesToShow: a
                } = this.elementSettings, r = Array.from(this.slides).filter(i => i.classList.contains("is-visible"));
                let o = Array.from(this.slides).findIndex(i => i.classList.contains("is-visible"));
                n[e] && (r.length >= Number(a[e]) + 2 || o > 0) && o++, this.currentIndex = o < 0 ? 0 : o
            });
            b(this, "updateNavigationButtonsState", () => {
                const {
                    device: e,
                    slidesToShow: n
                } = this.elementSettings, a = this.getTotalPaginationButtons(), r = this.getActivePagination();
                if (this.slides.length <= n[e]) {
                    this.nextButton.style.visibility = "hidden", this.prevButton.style.visibility = "hidden";
                    return
                }
                r >= a - 1 ? (this.nextButton.style.visibility = "hidden", this.prevButton.style.visibility = "") : r === 0 ? (this.nextButton.style.visibility = "", this.prevButton.style.visibility = "hidden") : (this.nextButton.style.visibility = "", this.prevButton.style.visibility = "")
            });
            b(this, "getTotalPaginationButtons", () => {
                const {
                    slidesToShow: e,
                    slidesToScroll: n,
                    device: a
                } = this.elementSettings;
                return this.slides.length <= e[a] ? 1 : Math.ceil((this.slides.length - e[a]) / n[a]) + 1
            });
            b(this, "getActivePagination", () => {
                const {
                    slidesToScroll: e,
                    device: n
                } = this.elementSettings;
                return Math.ceil(Number(this.currentIndex) / e[n])
            });
            b(this, "updateSliderHeight", (e = !1) => {
                if (e) {
                    const {
                        device: n,
                        slidesToShow: a,
                        displayPartialItems: r,
                        spacing: o
                    } = this.elementSettings, i = r[n] ? Number(a[n]) + 1 : a[n], c = Array.from(this.slides).slice(0, i).map(l => this.getTotalHeightOfActiveSlides(l)), d = Math.max(...c) || 0;
                    this.container.style.height = `${Number.parseInt(o[n])+d}px`
                } else {
                    const {
                        device: n,
                        spacing: a
                    } = this.elementSettings, r = this.getMaxHeightOfActiveSlides();
                    this.container.style.height = `${Number.parseInt(a[n])+r}px`
                }
            });
            b(this, "getTotalHeightOfActiveSlides", (e, n = !1) => {
                try {
                    let a = 0;
                    const r = e.childNodes;
                    for (let o = 0; o < r.length; o++) {
                        const i = r[o],
                            s = n ? parseInt(getComputedStyle(i).height) : i.getBoundingClientRect().height;
                        a += Number(s || 0)
                    }
                    return a
                } catch (a) {
                    return console.error(a), 0
                }
            });
            b(this, "getMaxHeightOfActiveSlides", () => {
                let e = Array.from(this.slides).filter(r => r.classList.contains("is-visible"));
                if (!e.length) {
                    const {
                        slidesToShow: r,
                        device: o
                    } = this.elementSettings;
                    e = Array.from(this.slides).slice(0, r[o])
                }
                const n = e.map(r => this.getTotalHeightOfActiveSlides(r));
                return Math.max(...n)
            });
            b(this, "updatePaginationButtonsState", () => {
                var a, r;
                const e = ((a = this.paginationButtons) == null ? void 0 : a.length) - 1;
                let n = this.getActivePagination();
                n > e && (n = e), (r = this.paginationButtons) == null || r.forEach((o, i) => {
                    i === n ? o.classList.add("active") : o.classList.remove("active")
                })
            });
            b(this, "renderPaginationButtonsLiveView", () => {
                if (this.elementSettings.paginationStyle !== "none") {
                    const e = this.container.querySelector(":scope > .pf-slider-nav");
                    if (!e) return;
                    e.replaceChildren();
                    let a = this.getTotalPaginationButtons();
                    for (; a > 0;) {
                        const r = document.createElement("button");
                        r.setAttribute("type", "button"), e.appendChild(r), a--
                    }
                }
            });
            b(this, "resizeSlideObserver", () => {
                const e = new ResizeObserver(() => {
                    this.updateSliderHeight()
                });
                this.slides.forEach(n => n.childNodes.forEach(a => e.observe(a))), this.disconnectResizeObserver = () => {
                    this.slides.forEach(n => {
                        n.childNodes.forEach(a => e.unobserve(a))
                    }), e.disconnect()
                }
            });
            b(this, "initVisibleObservers", async () => {
                const e = new IntersectionObserver((n, a) => {
                    n.forEach(r => this.updateVisibleClasses(r))
                }, {
                    root: this.container,
                    threshold: .01
                });
                this.slides.forEach(n => e.observe(n)), this.disconnectVisibleObserver = () => {
                    this.slides.forEach(n => e.unobserve(n)), e.disconnect()
                }
            });
            b(this, "initScrollAction", () => {
                const {
                    device: e,
                    slidesToScroll: n
                } = this.elementSettings;
                this.slides.forEach((a, r) => {
                    r % n[e] === 0 ? a.style.scrollSnapStop = "always" : a.style.scrollSnapStop = ""
                })
            });
            b(this, "handleNavigationButtons", () => {
                var e, n;
                this.nextButton && this.prevButton && (this.elementSettings.navStyle !== "none" && this.updateNavigationButtonsState(), (e = this.nextButton) == null || e.addEventListener("click", this.handleNextNavigationButons, {
                    passive: !0
                }), (n = this.prevButton) == null || n.addEventListener("click", this.handlePrevNavigationButons, {
                    passive: !0
                }))
            });
            b(this, "handleNextNavigationButons", e => {
                e.stopPropagation();
                const n = this.slides.length,
                    {
                        slidesToScroll: a,
                        device: r
                    } = this.elementSettings;
                if (!e.detail || e.detail === 1) {
                    const o = n - a[r];
                    let i = Number(this.currentIndex) + Number(a[r]);
                    i > o && (i = o), this.currentIndex = i, this.updatePaginationButtonsState(), this.container.setAttribute("no-update-pagination-and-current-index-again", "true"), this.goToSlide(i)
                }
            });
            b(this, "handlePrevNavigationButons", e => {
                e.stopPropagation();
                const {
                    slidesToScroll: n,
                    device: a
                } = this.elementSettings;
                if (!e.detail || e.detail === 1) {
                    let r = this.currentIndex - n[a];
                    r < 0 && (r = 0), this.currentIndex = r, this.updatePaginationButtonsState(), this.container.setAttribute("no-update-pagination-and-current-index-again", "true"), this.goToSlide(r)
                }
            });
            b(this, "goToSlide", e => {
                const {
                    top: n,
                    left: a
                } = this.getScrollOffset(e);
                this.container.scroll({
                    top: n,
                    left: a,
                    behavior: "smooth"
                })
            });
            b(this, "getScrollOffset", e => {
                const n = this.slides[e];
                let a = (n == null ? void 0 : n.offsetTop) || 0,
                    r = (n == null ? void 0 : n.offsetLeft) || 0;

                function o(i, s, c) {
                    return i = Math.min(c, i), i = Math.max(s, i), i
                }
                return a = o(a, 0, this.container.scrollHeight), r = o(r, 0, this.container.scrollWidth), {
                    top: a,
                    left: r
                }
            });
            b(this, "handlePaginationButtons", () => {
                var e;
                this.elementSettings.paginationStyle !== "none" && this.updatePaginationButtonsState(), (e = this.paginationButtons) == null || e.forEach((n, a) => {
                    n.addEventListener("click", r => {
                        this.handleClickPaginationButon(r, a)
                    })
                })
            });
            b(this, "handleClickPaginationButon", (e, n) => {
                e.stopPropagation();
                const {
                    slidesToScroll: a,
                    device: r
                } = this.elementSettings;
                if (!e.detail || e.detail === 1) {
                    this.paginationButtons.forEach(s => s.classList.remove("active")), e.target.classList.add("active"), this.container.setAttribute("no-update-pagination-and-current-index-again", "true");
                    const i = n * a[r];
                    this.currentIndex = i, this.goToSlide(i)
                }
            });
            if (!e) return;
            this.container = e, this.elementSettings = Object.assign(this.getElementSettings(), n);
            const {
                listLayout: a,
                device: r
            } = this.elementSettings;
            isEmpty_1(this.elementSettings) || a[r] !== LIST_LAYOUT.SLIDE || (this.slides = e.querySelectorAll(":scope > .pf-slide"), this.nextButton = e.querySelector(":scope > .pf-slider-next"), this.prevButton = e.querySelector(":scope > .pf-slider-prev"), this.nextButton.style.zIndex = "10", this.prevButton.style.zIndex = "10", this.initSlideshow())
        }
        updateVisibleClasses(e) {
            const n = e.target;
            e.isIntersecting ? n.classList.add("is-visible") : n.classList.remove("is-visible")
        }
    }
    async function handleShopifyListElement() {
        ["ProductList2", "CollectionListing2", "ArticleList2", "ContentList2", "Instagram2"].forEach(t => {
            handleShopifyInitSlideshow(`[data-pf-type="${t}"]`)
        })
    }
    async function handleShopifyInitSlideshow(t) {
        try {
            document.querySelectorAll(t).forEach(n => {
                const a = n.querySelector(".pf-slider");
                new Slideshow(a)
            })
        } catch (e) {
            console.error(`Error init slideshow ${t} `, e)
        }
    }
    async function handleSPR() {
        const t = window.SPR;
        t && (t.registerCallbacks(), t.initRatingHandler(), t.initDomEls(), t.loadProducts(), t.loadBadges())
    }
    async function handleGlobalSections() {
        const t = n => {
                n.querySelectorAll('[data-pf-type="Section"],[data-pf-type="FlexSection"]').forEach(r => {
                    const o = getComputedStyle(r);
                    o.position === "sticky" && Object.assign(n.style, {
                        position: o.position,
                        top: o.top,
                        zIndex: o.zIndex
                    })
                })
            },
            e = document.querySelectorAll('[data-pf-type="GlobalSection"]');
        e.length > 0 && e.forEach(n => {
            t(n)
        })
    }
    async function handleOpenPopup() {
        const t = document.querySelectorAll('[data-action="modal"]');

        function e(a, r) {
            for (const o in r) Object.hasOwn(r, o) && a.setAttribute(o, r[o])
        }
        const n = document.querySelector(".pf-m");
        t.forEach(a => {
            a.addEventListener("click", async r => {
                r.stopPropagation();
                const o = document.createElement("iframe");
                e(o, {
                    "data-pagefly-popup": !0,
                    allowfullscreen: "allowfullscreen",
                    style: "width: 100%; height: calc(100% - 24px)"
                });
                const i = r.currentTarget,
                    {
                        src: s,
                        width: c,
                        height: d,
                        popupAnimation: l,
                        popupContent: u
                    } = i.dataset;
                if (!!s) {
                    if (u === "image") {
                        const {
                            imagePopupObjFit: f,
                            imagePopupAlt: h,
                            imagePopupTitle: v,
                            imagePopupObjPosition: y
                        } = i.dataset, p = document.createElement("img"), S = {
                            src: getOriginalSrc(s),
                            style: `width: 100%; height: calc(100% - 24px); display: block; margin: auto; object-fit: ${f}; object-position: ${y}`
                        };
                        h && (S.alt = h), v && (S.title = v), e(p, S), l && (p.className = `pf-animated ${l}`), Array.from(n.children).length < 2 && n.append(p)
                    } else if (u === "youtube" || u === "vimeo") Array.from(n.children).length < 2 && n.append(o), e(o, {
                        src: s
                    });
                    else if (u === "video") {
                        let {
                            muted: f,
                            loop: h,
                            controls: v,
                            autoplay: y
                        } = i.dataset;
                        const {
                            src: p
                        } = i.dataset, S = document.createElement("video");
                        e(S, {
                            style: "width: 100%; height: calc(100% - 24px)"
                        }), S.classList.add("pf-html5-video"), Array.from(n.children).length < 2 && n.append(S), r.preventDefault(), r.stopPropagation(), y = y === "true", v = v === "true", h = h === "true", f = f === "true", n.style.cssText = "visibility: visible; width: 650px; height: 450px;", e(S, {
                            src: p
                        }), v && e(S, {
                            controls: ""
                        }), y && S.play(), S.addEventListener("click", T => {
                            T.preventDefault(), T.stopPropagation(), T.currentTarget.hasAttribute("controls") === !1 && (S.paused ? S.play() : S.pause())
                        }), h && e(S, {
                            loop: ""
                        }), S.muted = f
                    } else if (u === "shopify") {
                        let f = function() {
                                if (v && !h) return;
                                console.log("addIframeEvent", o.contentDocument), v = !0, o.contentDocument.querySelectorAll("form").forEach(I => {
                                    I.addEventListener("submit", function(w) {
                                        w.preventDefault(), pageflyPost(I.getAttribute("action"), serializeArray(new FormData(I)))
                                    })
                                }), o.contentDocument.querySelectorAll("a").forEach(I => {
                                    I.addEventListener("click", function(w) {
                                        w.preventDefault();
                                        const C = w.currentTarget;
                                        console.log("redirect", C);
                                        const O = C.getAttribute("href"),
                                            k = C.getAttribute("target");
                                        O && (k === "_blank" ? window.open(O) : window.location.href = O)
                                    })
                                })
                            },
                            h = !1,
                            v = !1;
                        const y = await getHttpRequest(s);
                        o.onload = p => {
                            if (console.log("iframe load", p, o.contentDocument), !o.contentDocument || !h) {
                                e(o, {
                                    srcdoc: y
                                }), h = !0;
                                return
                            }
                            f()
                        }, Array.from(n.children).length < 2 && n.append(o), setTimeout(() => {
                            console.log("iframe error", r, o.contentDocument), o.contentDocument || (e(o, {
                                srcdoc: y
                            }), h = !0)
                        }, 1e3)
                    }
                    n.style.display = "flex", n.style.width = c, n.style.height = `calc(${d} + 24px)`, n.showModal(), l && (o.className = `pf-animated ${l}`)
                }
            })
        })
    }

    function serializeArray(t) {
        const e = [];
        for (const [n, a] of t) e.push({
            name: n,
            value: a
        });
        return e
    }

    function pageflyPost(t, e, n = "post") {
        const a = document.createElement("form");
        a.method = n, a.action = t, e.forEach(function(r) {
            const o = document.createElement("input");
            o.type = "hidden", o.name = r.name, o.value = r.value, a.appendChild(o)
        }), document.body.appendChild(a), a.submit()
    }
    async function handleScrollToSection() {
        const t = document.querySelectorAll("[data-to-section]"),
            e = getDevice();
        t.forEach(n => {
            const a = JSON.parse(n.getAttribute("data-offset"));
            window.addEventListener("load", () => {
                const r = n.getAttribute("data-to-section"),
                    o = document.querySelector(`[data-section-id=${r}]`) || document.querySelector(`.${r}`);
                let i = o == null ? void 0 : o.previousElementSibling;
                for (; i;) {
                    const s = i.querySelectorAll('img[loading="lazy"]');
                    for (let c = 0; c < s.length; c++) s[c].removeAttribute("loading");
                    i = i == null ? void 0 : i.previousElementSibling
                }
            }), n.addEventListener("click", r => {
                const o = a[e] ? parseInt(a[e]) : 0;
                r.preventDefault(), r.stopPropagation();
                const s = r.currentTarget.getAttribute("data-to-section"),
                    c = "pf_accordion_offset" in window ? window.pf_accordion_offset : 0;
                if (s) {
                    const u = (document.querySelector(`[data-section-id=${s}]`) || document.querySelector(`.${s}`)).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
                    smoothScroll(u - c - o, 1e3)
                }
            })
        })
    }
    async function initModal() {
        const t = document.querySelectorAll('[data-action="modal"]'),
            e = document.querySelectorAll('[data-action="lightbox"]'),
            n = document.querySelectorAll('[data-action="popup-video"]');
        if (t.length || e.length || n.length) {
            const a = document.createElement("style"),
                r = document.createElement("dialog");
            r.classList.add("pf-m"), document.body.append(r);
            const o = document.createElement("button");
            o.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 224.512 224.512" style="enable-background:new 0 0 224.512 224.512;" xml:space="preserve" width="16" height="16" class=""><g><g>
	<polygon style="fill:#FFFFFF" points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  " data-original="#010002" class="active-path" data-old_color="#010002"></polygon>
</g></g> </svg>`, o.classList.add("pf-close-btn"), r.appendChild(o), document.head.appendChild(a), a.appendChild(document.createTextNode(modalDataCss))
        }
    }

    function handleRemoveModalContent(t) {
        Array.from(t.children).filter(n => !n.classList.contains("pf-close-btn")).forEach(n => t.removeChild(n)), t.style.display = "none", t.style.removeProperty("width"), t.style.removeProperty("max-height"), t.style.removeProperty("height")
    }
    async function hideModal() {
        const t = document.querySelector(".pf-m");
        t && (t.addEventListener("click", e => {
            const n = e.target;
            (n === t || n.tagName.toLowerCase() === "button") && t.close()
        }), t.addEventListener("close", () => {
            handleRemoveModalContent(t)
        }))
    }
    const PARALLAX_SELECTORS = ['div[data-parallax="true"]', 'section[data-parallax="true"]'],
        PARALLAX_SELECTOR = PARALLAX_SELECTORS.join(", ");
    async function initParallax() {
        document.querySelectorAll(PARALLAX_SELECTOR).length > 0 && (await loadJS("https://cdn.pagefly.io/static/assets/jarallax.min.js").catch(console.error), setTimeout(() => {
            document.querySelectorAll(PARALLAX_SELECTOR).forEach(e => {
                const n = e.getAttribute("data-parallax-speed") || 4,
                    a = e.querySelector(".pf-parallax-img");
                "jarallax" in window && window.jarallax(e, {
                    speed: Number(n) / 10,
                    imgElement: ".pf-parallax-img",
                    onInit: function() {
                        a.style.opacity = 1
                    }
                })
            })
        }, 100))
    }
    async function openLightbox() {
        document.querySelectorAll("[data-action='lightbox']").forEach(t => {
            t.addEventListener("click", e => {
                const n = e.currentTarget;
                e.preventDefault(), e.stopPropagation();
                const a = document.querySelector(".pf-m");
                a.style.display = "flex", a.style.maxHeight = "100%";
                const r = document.createElement("img"),
                    o = n.getAttribute("data-href") || n.getAttribute("href");
                o && (r.src = getOriginalSrc(o)), a.appendChild(r), a.showModal()
            })
        })
    }
    async function openUrl() {
        document.querySelectorAll("[data-href][data-pf-type]").forEach(e => {
            const n = e.getAttribute("data-href") || "";
            if (!n || e.getAttribute("data-action") && !["url", "phone", "email"].includes(e.getAttribute("data-action"))) return;
            const a = e.getAttribute("data-target") || "_self";
            e.addEventListener("click", r => {
                r.stopPropagation();
                const o = () => {
                    n && (r.ctrlKey || r.metaKey) ? window.open(n, "_blank") : n && window.open(n, a)
                };
                if (isTrackingActive() && !!window.gtag && n.indexOf("/products/") > -1) {
                    window.gtag("event", "pf_view_product", Object.assign({
                        send_to: "pagefly",
                        pf_view_product: 1,
                        pf_product_handle: n,
                        pf_event: "view_product",
                        event_callback: o
                    }, window.pfPageInfo));
                    return
                }
                o()
            })
        })
    }
    window.__openUrl = openUrl;
    const setupEventTracking = async () => {
        (pfPageSetting.trackingIDs || pfSetting.trackingIDs || []).forEach(e => {
            const {
                gaEvent: n,
                type: a,
                pxEvent: r,
                pxCode: o,
                elementType: i,
                elementIndex: s
            } = e;
            let c = `.pf-${s}_`;
            i === "ProductImage" && (c = `${c} [data-pf-type="MasterImage"]`);
            const d = document.querySelector(c);
            if (!d) return console.warn("Not found element", c);
            (n || r || o) && d.addEventListener("click", () => {
                if (n && typeof window.ga == "function")
                    if (typeof n == "string") window.ga("send", "event", ...n.split(",")), console.info("Send Ga event:: ", a, ...n.split(","));
                    else {
                        const l = {
                            hitType: "event",
                            eventCategory: n[0] || "",
                            eventAction: n[1] || "",
                            eventLabel: n[2] || ""
                        };
                        window.ga("send", l), console.info("Send Ga event:: ", a, l)
                    }
                o && typeof window.fbq == "function" && (new Function(o)(), console.info("Send FB Pixel event:: ", a, o, r))
            })
        })
    };
    async function handleAction() {
        initModal().catch(console.error), hideModal().catch(console.error), initParallax().catch(console.error), openLightbox().catch(console.error), openUrl().catch(console.error), handleScrollToSection().catch(console.error), handleOpenPopup().catch(console.error), handleGlobalSections().catch(console.error), setupEventTracking().catch(console.error)
    }
    async function handleShopifyProductDynamicCheckout() {
        const t = document.querySelectorAll('[data-pf-type="ProductDynamicCheckout"]');
        t.length > 0 && t.forEach(e => {
            const n = e.getAttribute("data-value"),
                a = e.querySelector(".shopify-payment-button__button--unbranded");
            a && (a.innerHTML = n);
            const r = e.closest('[data-pf-type="ProductBox"]'),
                o = e.querySelector('input[name="id"]');
            (r == null ? void 0 : r.querySelectorAll('[name="id"]').length) > 1 && (o == null || o.remove())
        })
    }
    async function runPaginationHelper() {
        storeSomeProductElements().catch(console.error), handleAction().catch(console.error), await handleShopifyProductMedia().catch(console.error), await handleShopifyProductMedia2().catch(console.error), handleDefaultVariant().catch(console.error), handleShopifyProductATC().catch(console.error), handleShopifyProductVariants().catch(console.error), handleShopifyProductImage().catch(console.error), handleShopifyProductQuantity().catch(console.error), handleProductCollectionDescription().catch(console.error), handleShopifyProductVariantSwatches().catch(console.warn), handleSPR().catch(console.error), window.__openUrl()
    }
    async function handleShopifyProduct() {
        storeSomeProductElements().catch(console.warn), await handleShopifyProductMedia().catch(console.warn), await handleShopifyProductMedia2().catch(console.warn), handleShopifyListElement().catch(console.warn), handleDefaultVariant().catch(console.warn), handleShopifyProductImage().catch(console.warn), handleShopifyProductBadge().catch(console.warn), handleShopifyProductVariants().catch(console.warn), handleShopifyProductATC().catch(console.warn), handleShopifyProductQuantity().catch(console.warn), handleProductCollectionDescription().catch(console.warn), handleShopifyProductList().catch(console.warn), handleDEPRECATEDelements().catch(console.warn), handleShopifyProductVariantSwatches().catch(console.warn), handleShopifyProductDynamicCheckout().catch(console.warn)
    }
    async function handleAccordion() {
        const t = document.querySelectorAll('[data-pf-type="Accordion.Header"]');
        t.length && loadAccordionStylesIfPageHasVersionLessThan4_10_0();

        function e(o, i) {
            new IntersectionObserver((s, c) => {
                s.forEach(d => {
                    d.intersectionRatio > 0 && (i(), c.disconnect())
                })
            }).observe(o)
        }

        function n(o, i, s) {
            const c = new MutationObserver((l, u) => {
                    for (const f of l) f.type === "attributes" && a(o, i, s)
                }),
                d = {
                    subtree: !0,
                    attributes: !0
                };
            c.observe(s, d)
        }

        function a(o, i, s) {
            o.getAttribute("data-active") === "true" ? i.style.height = `${s.clientHeight}px` : i.style.height = "0px"
        }

        function r(o) {
            return new Promise(i => {
                const s = o.querySelectorAll("img");
                let c = 0;
                s.length === 0 && i(0);

                function d() {
                    c++, c === s.length && i(c)
                }
                s.forEach(l => {
                    l.complete ? d() : (l.addEventListener("load", d), l.addEventListener("error", d))
                })
            })
        }
        t.forEach(o => {
            const i = o.parentElement,
                s = document.createElement("div");
            s.className = "pf-accordion-wrapper";
            const c = i.querySelector('[data-pf-type="Accordion.Content"]');
            n(o, s, c), e(c, async () => {
                a(o, s, c), await handleShopifyProductMedia(c).catch(console.error), await handleShopifyProductMedia2(c).catch(console.error), await r(c), a(o, s, c)
            }), a(o, s, c), c.style.display = "", s.classList.add(`${o.getAttribute("data-active")==="true"?"pf-accordion-show":"pf-accordion-hide"}`), s.append(c), i.append(s);

            function d(u) {
                u.classList.remove("pf-accordion-show"), u.classList.remove("pf-accordion-visually-show"), u.classList.add("pf-accordion-visually-hidden"), s.addEventListener("animationend", function(f) {
                    u.classList.add("pf-accordion-hide"), u.classList.remove("pf-accordion-visually-hidden")
                }, {
                    capture: !1,
                    once: !0,
                    passive: !1
                }), u.classList.remove("pf-accordion-wrapper-100")
            }
            const l = s.querySelectorAll('[data-pf-type="Accordion"]').length;
            o.addEventListener("click", u => {
                u.stopPropagation();
                const f = u.currentTarget,
                    h = f.parentNode.parentElement,
                    v = h.getAttribute("data-scrolling"),
                    y = h.getAttribute("data-multiple"),
                    p = c.clientHeight,
                    S = [...h.children].filter(I => I !== f.parentElement),
                    T = findParentBySelector(i.parentElement, ".pf-accordion-wrapper");
                if (T && T.classList.add("pf-accordion-wrapper-100"), f.getAttribute("data-active") === "true") l && (s.style.height = `${p}px`), f.setAttribute("data-active", "false"), d(s), f.children[0] && f.children[0].classList.contains("pfa-minus") && f.children[0].classList.replace("pfa-minus", "pfa-plus");
                else {
                    f.setAttribute("data-active", "true"), s.classList.remove("pf-accordion-visually-hidden"), s.classList.remove("pf-accordion-hide"), s.classList.add("pf-accordion-visually-show"), s.addEventListener("animationend", async function(C) {
                        s.classList.add("pf-accordion-show"), s.classList.remove("pf-accordion-visually-show")
                    }, {
                        capture: !1,
                        once: !0,
                        passive: !1
                    });
                    const I = s.querySelectorAll('[data-pf-type="SlideshowSlide"] > div') || [],
                        w = s.querySelector(".pf-slider");
                    e(c, async () => {
                        await r(c), !l && a(f, s, c)
                    }), I.length && w.style.height === "0px" && (w.style.height = "auto"), f.children[0] && f.children[0].classList.contains("pfa-plus") && f.children[0].classList.replace("pfa-plus", "pfa-minus")
                }
                if (S.forEach(I => {
                        const w = I.childNodes[0],
                            C = I.childNodes[1];
                        y === "false" && (w.setAttribute("data-active", "false"), C && (d(C), C.classList.remove("pf-accordion-wrapper-100")), w.children[0] && w.children[0].classList.contains("pfa-minus") && w.children[0].classList.replace("pfa-minus", "pfa-plus"))
                    }), v === "true") {
                    s.style.transition = "height 0.65s ease";
                    const I = "pf_accordion_offset" in window ? window.pf_accordion_offset : 0,
                        w = f.parentElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
                        C = f.parentElement.previousElementSibling;
                    let O = 0;
                    C && (C == null ? void 0 : C.children[0].getAttribute("data-active")) === "false" && (O = C == null ? void 0 : C.children[1].getBoundingClientRect().height), smoothScroll(w - I - O, 650)
                }
            })
        })
    }
    async function handleAnchorTabAccordion() {
        const t = e => {
            const n = e.split("#")[1],
                a = document.querySelector(`button.pf-anchor[href="#${n}"], 
       summary.pf-anchor[href="#${n}"],
       [data-pf-anchor="${n}"]`);
            if (typeof n == "string" && n && a) {
                (a.dataset.active === "false" || !a.dataset.active) && a.click();
                const r = a.getBoundingClientRect().top,
                    o = window.innerHeight,
                    i = a.getBoundingClientRect().height,
                    s = (o + i) / 2,
                    c = r - s;
                window.scrollBy(0, c)
            }
        };
        t(window.location.href), window.addEventListener("hashchange", e => {
            e.newURL && t(e.newURL)
        }, !1)
    }

    function loadOldAccordionStyles() {
        const t = document.createElement("style");
        t.innerHTML = `  
  @keyframes pf-accordion-animation-show {
    0% {
      height: 0px;
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  
  @keyframes pf-accordion-animation-hide {
    0% {
      display: block;
      opacity: 1;
    }
    99% {
      display: block;
    }
    100% {
      height: 0px;
      display: none;
      opacity: 0;
    }
  }
  
  .pf-accordion-show {
    display: block;
  }
  
  .pf-accordion-visually-show {
    animation: pf-accordion-animation-show 350ms ease;
    animation-fill-mode: forwards;
  }
  
  .pf-accordion-hide {
    display: none;
  }
  
  .pf-accordion-visually-hidden {
    animation: pf-accordion-animation-hide 350ms ease;
    animation-fill-mode: forwards;
    overflow: hidden;
  }
  
  .pf-set-height-0 {
    height: 0px !important;
  }
  
  .pf-accordion-wrapper-100 {
    height: 100% !important;
  }
     
`, document.head.appendChild(t)
    }
    const ACCORDION_WITH_STYLED_COMPONENT_VERSION = "4.10.0";

    function loadAccordionStylesIfPageHasVersionLessThan4_10_0() {
        var t, e;
        try {
            const n = ((e = (t = Array.from(document.querySelectorAll("script"))) == null ? void 0 : t.map(r => getPFHelperVersion(r.getAttribute("src") || ""))) == null ? void 0 : e.filter(r => !!r)) || [];
            (n == null ? void 0 : n.find(r => comparePFHelperVersion(r, ACCORDION_WITH_STYLED_COMPONENT_VERSION) < 0)) && loadOldAccordionStyles()
        } catch (n) {
            console.error("loadAccordionStylesIfPageHasVersionLessThan4_10_0", n)
        }
    }
    class PFAccordion {
        constructor(e) {
            b(this, "selector");
            b(this, "SCROLL_DURATION");
            b(this, "accordionHeaders");
            b(this, "scrollToTop", e => {
                const n = e.getBoundingClientRect().top + window.scrollY;
                window.scroll({
                    top: n - 50 - e.offsetHeight,
                    behavior: "smooth"
                })
            });
            this.selector = e, this.SCROLL_DURATION = 300, this.init()
        }
        init() {
            this.accordionHeaders = Array.from(document.querySelectorAll(`[data-pf-type="${this.selector}.Header"]`)), this.accordionHeaders.length && this.observeAccordionHeader()
        }
        observeAccordionHeader() {
            if ("IntersectionObserver" in window) {
                const e = new IntersectionObserver((n, a) => {
                    const r = n.length;
                    for (let o = 0; o < r; o++) {
                        const i = n[o];
                        if (i.isIntersecting) {
                            const s = i.target;
                            this.handleHeaderClick(s), a.unobserve(s)
                        }
                    }
                });
                this.accordionHeaders.forEach(n => {
                    e.observe(n)
                })
            } else this.accordionHeaders.forEach(e => {
                this.handleHeaderClick(e)
            })
        }
        handleHeaderClick(e) {
            e.parentElement.addEventListener("click", n => {
                n.preventDefault();
                const a = e.closest(`div[data-pf-type="${this.selector}"]`),
                    {
                        openMultiple: r,
                        scrollToTop: o
                    } = a.dataset || {},
                    i = e.closest("details"),
                    s = a.querySelector(":scope > details[open]");
                r === "false" && s && s !== i && this.toggleAccordion(s, s.querySelector(`div[data-pf-type="${this.selector}.Header"]`), !0), o === "true" ? this.toggleAccordion(i, e, i.hasAttribute("open"), this.scrollToTop) : this.toggleAccordion(i, e, i.hasAttribute("open"))
            })
        }
        toggleAccordion(e, n, a, r) {
            a ? (e.classList.remove("open"), n.setAttribute("data-active", "false"), setTimeout(() => {
                e.open = !1, r && r(n)
            }, this.SCROLL_DURATION)) : (e.open = !0, n.setAttribute("data-active", "true"), setTimeout(() => {
                e.classList.add("open")
            }, 10), r && setTimeout(() => {
                r(n)
            }, this.SCROLL_DURATION))
        }
    }
    const handleAccordion3 = async () => {
            new PFAccordion("Accordion3")
        },
        TimeFunctionUtils = {
            alias: {
                w: "week",
                d: "day",
                h: "hour",
                m: "minute",
                s: "second"
            },
            secondPer: {
                week: 7 * 24 * 60 * 60,
                day: 24 * 60 * 60,
                hour: 60 * 60,
                minute: 60,
                second: 1
            },
            getSecondFromTime: function(t) {
                const e = Object.keys(this.secondPer).reverse();
                return t.reduce((n, a, r) => n + a * this.secondPer[e[r]], 0)
            },
            parseTimeFromSecond: function(t, e = []) {
                const n = (r, o) => {
                        const i = Math.floor(r / this.secondPer[o]);
                        return [i, r - i * this.secondPer[o]]
                    },
                    a = [];
                return Object.keys(this.secondPer).map(r => {
                    if (r !== "second" && !e.includes(r)) {
                        let o;
                        [o, t] = n(t, r), a.unshift(o)
                    }
                }), a.unshift(t), a
            },
            prepareDateRange(t) {
                const e = new Date(t.start),
                    n = new Date(t.end);
                return e.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), {
                    start: e,
                    end: n
                }
            }
        },
        webStorage = {
            storage: null,
            init() {
                try {
                    const t = "__webStorageTest__";
                    window.localStorage.setItem(t, t), window.localStorage.removeItem(t), this.storage = window.localStorage
                } catch {
                    console.warn("LocalStorage is not available. Your data will not persist across sessions. Consider enabling third-party cookies for a better experience."), this.storage = {}
                }
            },
            setItem(t, e) {
                this.storage instanceof Storage ? this.storage.setItem(t, e) : this.storage[t] = e
            },
            getItem(t) {
                if (this.storage instanceof Storage) {
                    const e = this.storage.getItem(t);
                    return e || null
                } else {
                    const e = this.storage[t];
                    return e || null
                }
            },
            removeItem(t) {
                this.storage instanceof Storage ? this.storage.removeItem(t) : delete this.storage[t]
            },
            clear() {
                this.storage instanceof Storage ? this.storage.clear() : this.storage = {}
            }
        };
    webStorage.init();
    window.__webStorage__ = webStorage.storage;

    function countdown(t) {
        let e = null;
        const n = t.getAttribute("data-translation").replace(/&quot;/g, '"'),
            {
                countdownType: a,
                startTime: r,
                repeat: o,
                endType: i,
                endTime: s,
                endPeriod: c,
                timeData: d,
                version: l,
                hideIfInactive: u,
                redirectUrl: f,
                fullWidth: h,
                label: v
            } = JSON.parse(n),
            y = t.querySelectorAll('[data-pf-type="CountdownNumber"]');

        function p(A) {
            const x = A[0],
                m = x.toUpperCase() + A.slice(1);
            return function(g) {
                g.classList.add(`pf-countdown__${A}`), v.on && g.nextElementSibling ? g.nextElementSibling.textContent = d[x].text || m : g.nextElementSibling && (g.nextElementSibling.textContent = "")
            }
        }
        const S = {
            w: p("weeks"),
            d: p("days"),
            h: p("hours"),
            m: p("mins"),
            s: p("secs")
        };
        y.forEach(A => {
            const x = A.parentElement.classList;
            Array.from(x).forEach(m => {
                m in S && S[m](A)
            })
        });
        const T = Object.keys(d).map(A => {
                const x = TimeFunctionUtils.alias[A];
                return !d[A].on && x
            }).filter(A => A),
            I = () => {
                let A = null;
                const x = new Date;
                if (a === "specific") {
                    const m = new Date(r),
                        g = i === "specific" ? new Date(s).getTime() - new Date(r).getTime() : c * 1e3;
                    if (m <= new Date && g > 0) {
                        const E = x.getTime() - m.getTime();
                        switch (o) {
                            case "hour":
                                const P = E % 36e5;
                                A = g - P;
                                break;
                            case "day":
                                const M = E % (24 * 3600 * 1e3);
                                A = g - M;
                                break;
                            case "week":
                                const F = E % (7 * 24 * 3600 * 1e3);
                                A = g - F;
                                break;
                            case "month":
                                const R = E % (30 * 24 * 3600 * 1e3);
                                A = g - R;
                                break;
                            case "never":
                            default:
                                A = g - E;
                                break
                        }
                    }
                } else {
                    const m = i === "specific" ? new Date(s).getTime() - x.getTime() : c * 1e3;
                    if (a === "first" && typeof e != "number") {
                        const E = `pf-${l}-start-countDown`,
                            P = webStorage.getItem(E),
                            M = P ? new Date(P) : x;
                        P || webStorage.setItem(E, M.toString()), e = m - (x.getTime() - M.getTime())
                    }
                    e = (typeof e == "number" ? e : m) - 1e3;
                    const g = m - e;
                    switch (o) {
                        case "hour":
                            const E = g % 36e5;
                            A = m - E, e += g - E;
                            break;
                        case "day":
                            const P = g % (24 * 3600 * 1e3);
                            A = m - P, e += g - P;
                            break;
                        case "week":
                            const M = g % (7 * 24 * 3600 * 1e3);
                            A = m - M, e += g - M;
                            break;
                        case "month":
                            const F = g % (30 * 24 * 3600 * 1e3);
                            A = m - F, e += g - F;
                            break;
                        case "never":
                        default:
                            A = m - g;
                            break
                    }
                }
                return A
            },
            w = t.querySelector(".pf-countdown__weeks"),
            C = t.querySelector(".pf-countdown__days"),
            O = t.querySelector(".pf-countdown__hours"),
            k = t.querySelector(".pf-countdown__mins"),
            q = t.querySelector(".pf-countdown__secs"),
            D = A => A < 10 ? `0${A}` : A;
        t == null || t.style.removeProperty("visibility");
        const _ = setInterval(() => {
            L()
        }, 1e3);
        L();

        function L() {
            const A = I();
            A > 0 ? t.style.display === "none" && (t.style.display = h ? "block" : "inline-block") : (u && (t.style.display = "none"), f && f.on && f.url && A !== null && (window.location.href = f.url)), typeof e == "number" && e <= 0 && clearInterval(_);
            const x = TimeFunctionUtils.parseTimeFromSecond(Math.floor(A > 0 ? A / 1e3 : 0), T);
            d.w.on && (w.innerText = `${D(x.length&&x.pop())}`), d.d.on && (C.innerText = `${D(x.length&&x.pop())}`), d.h.on && (O.innerText = `${D(x.length&&x.pop())}`), d.m.on && (k.innerText = `${D(x.length&&x.pop())}`), d.s.on && (q.innerText = `${D(x.length&&x.pop())}`)
        }
    }
    async function handleCountDown() {
        const t = document.querySelectorAll("[data-pf-type='CountDown']");
        for (let e = 0; e < t.length; e++) countdown(t[e])
    }
    const defaultOptionObserver = {
        threshold: 0
    };
    class BaseElementLazyLoader {
        constructor(e) {
            b(this, "options");
            b(this, "setProp", (e, n = "src", a = "data-src") => {
                const r = e.getAttribute(a);
                return r ? (e[n] = r, !0) : !1
            });
            b(this, "removeProp", (e, n = "data-src") => {
                e.hasAttribute(n) && e.removeAttribute(n)
            });
            this.options = e
        }
        handleIntersectionObserver(e, n, a, r = null) {
            const o = () => r ? r() : n();
            try {
                if (window.IntersectionObserver) {
                    const i = new IntersectionObserver((s, c) => {
                        s.forEach(d => {
                            d.isIntersecting && (n(d.target, c), a && c.unobserve(d.target))
                        })
                    }, this.options);
                    e.forEach(s => i.observe(s))
                } else o()
            } catch {
                o()
            }
        }
        observerElement(e, n, a = !0) {
            this.handleIntersectionObserver([n], e, a)
        }
        observerElements(e, n, a = !0, r) {
            this.handleIntersectionObserver(n, e, a, r)
        }
    }
    async function loadScript({
        src: t,
        iframeDoc: e = document,
        ...n
    }) {
        const a = e.createElement("script");
        Object.assign(a, {
            src: t,
            ...n
        });
        const r = new Promise((o, i) => {
            a.onload = () => o(a), a.onerror = s => i(new Error(`Failed to load script: ${t}: ${s}`))
        });
        e.body.appendChild(a), await r
    }

    function isScriptLoaded(t) {
        return document.querySelector(`script[src="${t}"]`) !== null
    }

    function processChunk(t) {
        const {
            start: e,
            list: n,
            callback: a,
            chunkSize: r,
            method: o
        } = t;
        let i = e + r;
        i = i > n.length ? n.length : i;
        for (let s = e; s < i; s++) a(n[s], s);
        i < n.length && (t.start = i, o(() => processChunk(t)))
    }

    function executeChunk(t, e, n = 10) {
        let a = o => setTimeout(o);
        window.requestAnimationFrame && (a = o => requestAnimationFrame(o)), window.requestIdleCallback && (a = o => requestIdleCallback(o)), processChunk({
            start: 0,
            list: t,
            callback: e,
            chunkSize: n,
            method: a
        })
    }
    class GMapLoader {
        constructor({ ...e
        }) {
            b(this, "gmapV1Selector");
            b(this, "gmapV2Selector");
            b(this, "gmapV2Elements");
            b(this, "gmapAPILink", "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=");
            var n;
            Object.assign(this, e), this.gmapV1Selector && this.handleGmapV1(), (this.gmapV2Selector || ((n = this.gmapV2Elements) == null ? void 0 : n.length)) && this.handleGmapV2()
        }
        async handleGmapV1() {
            const e = Array.from(document.querySelectorAll(this.gmapV1Selector));
            let n = null;
            e[0] && (n = e[0].getAttribute("data-api"), await loadScript({
                src: `${this.gmapAPILink}${n}`,
                charset: "utf-8",
                defer: !0
            }), e.map(a => {
                const r = a.getAttribute("data-gmap");
                this.onLoadGoogleMap(window, r, a)
            }))
        }
        async handleGmapV2() {
            (this.gmapV2Selector ? Array.from(document.querySelectorAll(this.gmapV2Selector)) : this.gmapV2Elements).forEach(n => {
                var i;
                const a = n.getAttribute("data-gmap");
                if (!a) return;
                const r = n.contentDocument || ((i = n.contentWindow) == null ? void 0 : i.document);
                if (!r) {
                    console.error("Cannot access iframe document.");
                    return
                }
                const o = n.getAttribute("data-api");
                r.body.style.cssText = "margin: 0; height: 100%;", loadScript({
                    iframeDoc: r,
                    src: `${this.gmapAPILink}${o}`,
                    charset: "utf-8",
                    defer: !0
                }).then(() => {
                    this.onLoadGoogleMap(n.contentWindow, a, n.contentWindow.document.body)
                })
            })
        }
        onLoadGoogleMap(e, n, a) {
            const r = e.google;
            if (!r || !n) return;
            const o = JSON.parse(n.replace(/&quot;/g, '"')),
                {
                    address: i,
                    height: s,
                    control: c,
                    customContent: d,
                    draggable: l,
                    lat: u,
                    long: f,
                    mapStyle: h,
                    mapTypeId: v,
                    markerIcon: y,
                    scrollWheel: p,
                    zoom: S
                } = o,
                T = {
                    center: {
                        lat: Number(u),
                        lng: Number(f)
                    },
                    zoom: Number(S),
                    styles: MapStyles[h],
                    maxZoom: 30,
                    minZoom: 0,
                    mapTypeId: v,
                    clickableIcons: !0,
                    disableDoubleClickZoom: !1,
                    draggable: l,
                    keyboardShortcuts: !0,
                    disableDefaultUI: !c,
                    scrollWheel: p,
                    height: s
                },
                I = new r.maps.Map(a, T),
                w = {
                    map: I,
                    position: {
                        lat: Number(u),
                        lng: Number(f)
                    },
                    options: {
                        optimized: !0
                    },
                    icon: {
                        url: y,
                        scaledSize: new r.maps.Size(24, 30),
                        size: new r.maps.Size(24, 30),
                        anchor: new r.maps.Point(12, 30)
                    }
                },
                C = new r.maps.Marker(w);
            if (i || d) {
                const O = new r.maps.InfoWindow({
                    content: d || i
                });
                C.addListener("click", () => O.open(I, C))
            }
        }
    }
    class GMapElementLazyLoader extends BaseElementLazyLoader {
        constructor({
            optionObserver: n = defaultOptionObserver,
            ...a
        }) {
            super(n);
            b(this, "elementSelector");
            b(this, "type");
            b(this, "loadGMapAdvance", n => new GMapLoader({
                gmapV2Elements: [n]
            }));
            b(this, "loadGMapBasic", n => this.setProp(n) && this.removeProp(n));
            Object.assign(this, a), this.init()
        }
        init() {
            const n = Array.from(document.querySelectorAll(this.elementSelector));
            executeChunk(n, a => {
                this.observerElement(this.type === "advanced" ? this.loadGMapAdvance : this.loadGMapBasic, a)
            })
        }
    }
    const handleAdvancedGMapStandardLoading = async () => new GMapLoader({
            gmapV1Selector: '[data-pf-type="GMap2"] .gmap2',
            gmapV2Selector: '[data-pf-type="GMapAdvancedV2"][data-lazyload="false"]'
        }),
        handleAdvancedGMapLazyLoading = async () => new GMapElementLazyLoader({
            elementSelector: '[data-pf-type="GMapAdvancedV2"][data-lazyload="true"]',
            type: "advanced"
        }),
        handleBasicGMapLazyLoading = async () => new GMapElementLazyLoader({
            elementSelector: 'iframe[data-pf-type="GMapBasicV2"][data-lazyload="true"]',
            type: "basic"
        });
    async function handleHTML5Video() {
        document.querySelectorAll('[data-pf-type="HTML.Video"] > video').forEach(e => {
            let n = !1;
            const a = e.getAttribute("controls") !== null;
            e.addEventListener("play", function() {
                e.play(), n = !0, e.nextElementSibling && (e.nextElementSibling.style.opacity = 0)
            }, !1), e.addEventListener("pause", function() {
                e.nextElementSibling && (e.nextElementSibling.style.opacity = 1)
            }, !1), e.parentNode.onclick = function(r) {
                const o = r.target === e;
                if (!a || a && (!n || !o)) return e.paused ? (e.play(), e.nextElementSibling && (e.nextElementSibling.style.opacity = 0)) : (e.pause(), e.nextElementSibling && (e.nextElementSibling.style.opacity = 1)), !1
            }
        })
    }
    class HTMLVideoHandler extends BaseElementLazyLoader {
        constructor({
            optionsObserver: n,
            ...a
        }) {
            super(n);
            b(this, "container");
            b(this, "selector");
            Object.assign(this, a), this.init()
        }
        init() {
            this.container = document.querySelectorAll(this.selector), this.container.length && executeChunk(this.container, this.handleElement.bind(this))
        }
        handleElement(n) {
            var o;
            const a = ((o = n == null ? void 0 : n.tagName) == null ? void 0 : o.toLowerCase()) === "video" ? n : n.querySelector("video");
            if (!a) return;
            a.getAttribute("data-lazyloading") === "lazy" ? this.observerElement(() => this.loadVideo({
                element: n,
                video: a
            }), n) : this.loadVideo({
                element: n,
                video: a
            })
        }
        addEvent({
            element: n,
            type: a,
            callback: r,
            options: o = !1
        }) {
            n.addEventListener(a, r, o)
        }
        loadVideo({
            element: n,
            video: a
        }) {
            const r = n.querySelector(".pf-video-cover-button"),
                o = n.querySelector(".pf-play-button"),
                i = a.hasAttribute("autoplay"),
                s = a.hasAttribute("controls"),
                c = a.hasAttribute("muted");
            (!r || i) && this.setProp(a) && this.removeProp(a);
            const d = f => f.classList.add("pf-visibility-hidden"),
                l = f => {
                    var h;
                    return (h = f.classList) == null ? void 0 : h.remove("pf-visibility-hidden")
                },
                u = f => {
                    a.getAttribute("src") || this.setProp(a) && this.removeProp(a), r && !r.classList.contains("pf-visibility-hidden") ? (a.play(), d(r)) : !s && (a.paused ? a.play() : a.pause())
                };
            this.addEvent({
                element: a,
                type: "loadeddata",
                callback: () => a && l(a)
            }), this.addEvent({
                element: n,
                type: "click",
                callback: u
            }), this.addEvent({
                element: a,
                type: "pause",
                callback: () => o && l(o)
            }), this.addEvent({
                element: a,
                type: "play",
                callback: () => o && d(o)
            }), i && c && (r && d(r), o && d(o), a.play())
        }
    }
    const handleHTMLVideo2 = async () => {
        new HTMLVideoHandler({
            optionsObserver: {
                threshold: .3
            },
            selector: '[data-pf-type="HTML.Video2"] , .pf-media-bg-video'
        })
    };
    class TwitterLoader extends BaseElementLazyLoader {
        constructor({
            optionObserver: n,
            ...a
        } = {
            optionObserver: defaultOptionObserver,
            selector: '[data-pf-type="TwitterFeed2"]',
            scriptUrl: "https://platform.twitter.com/widgets.js"
        }) {
            super(n);
            b(this, "selector");
            b(this, "container");
            b(this, "scriptUrl");
            Object.assign(this, a), this.init()
        }
        init() {
            this.container = [].slice.call(document.querySelectorAll(this.selector)), this.container = this.container.filter(n => (n == null ? void 0 : n.getAttribute("data-lazyload")) === "true"), this.observerElements(this.appendScriptWidget.bind(this), this.container, !0, this.appendScriptWidget)
        }
        async appendScriptWidget(n, a) {
            try {
                const r = n == null ? void 0 : n.querySelector("a");
                r.classList.add("twitter-timeline"), typeof window.twttr < "u" && window.twttr.widgets ? window.twttr.widgets.load(r) : !isScriptLoaded(this.scriptUrl) && await loadScript({
                    src: this.scriptUrl,
                    charset: "utf-8",
                    defer: !0
                })
            } catch (r) {
                console.error(r)
            }
        }
    }
    class SocialMediaFrameLoader extends BaseElementLazyLoader {
        constructor({
            optionObserver: n = defaultOptionObserver,
            ...a
        }) {
            super(n);
            b(this, "containerElement");
            b(this, "containerSelector");
            b(this, "elementSelector");
            b(this, "type", "iframe");
            b(this, "loadMedia", n => {
                this.type === "video" ? (this.setProp(n, "poster", "data-poster") && this.removeProp(n, "data-poster"), n.querySelectorAll("source[data-src]").forEach(r => {
                    this.setProp(r) && this.removeProp(r)
                }), n.load()) : this.setProp(n) && this.removeProp(n)
            });
            Object.assign(this, a), this.init()
        }
        init() {
            const n = this.containerElement || [].slice.call(document.querySelectorAll(this.containerSelector));
            executeChunk(n, a => {
                const r = [].slice.call(a.querySelectorAll(this.elementSelector));
                r.length && r.forEach(o => this.observerElement(this.loadMedia, o))
            })
        }
    }
    const handleFBPage2Loader = async () => new SocialMediaFrameLoader({
            containerSelector: '[data-pf-type="FBPageBox2"]',
            elementSelector: 'iframe[data-lazyload="true"]'
        }),
        handleFBLike2Loader = async () => new SocialMediaFrameLoader({
            containerSelector: '[data-pf-type="FBLikeButton2"]',
            elementSelector: 'iframe[data-lazyload="true"]'
        }),
        handleTwitterLoader = async () => new TwitterLoader;
    async function fetchData(t) {
        var a, r;
        const e = (a = getFrontEndSettings(t)) == null ? void 0 : a.token,
            n = ((r = getFrontEndSettings(t)) == null ? void 0 : r.limit) || 10;
        if (e) {
            const i = await (await fetch(`${appProxyUrl}/instagram?limit=${n}`, {
                headers: {
                    "X-Instagram-Access-Token": e
                }
            })).json();
            return (i == null ? void 0 : i.data) || []
        }
        return null
    }
    const removeElementToDom = t => t.remove(),
        appendHtmlToDom = (t, e, n = !1) => {
            var d, l;
            const a = t.querySelector("&> div"),
                r = (d = t.querySelector("div.pf-c img")) == null ? void 0 : d.closest("div.pf-c"),
                o = document.createElement("div");
            o.className = "pf-c pf-slide", o.innerHTML += '<a target="_blank"><video controls preload="none"><source type="video/mp4"/></video></a>', t.querySelectorAll(".pf-c").forEach(u => {
                removeElementToDom(u)
            });
            const s = e.length,
                c = new DocumentFragment;
            for (let u = 0; u < s; u++) {
                let f = null;
                e[u].media_type === "VIDEO" ? (f = o.cloneNode(!0), f.querySelector("video").setAttribute(n ? "data-poster" : "poster", e[u].thumbnail_url), f.querySelector("source").setAttribute(n ? "data-src" : "src", e[u].media_url)) : (f = r.cloneNode(!0), (l = f.querySelector("img")) == null || l.setAttribute("src", e[u].media_url)), f.querySelector("a").setAttribute("href", e[u].permalink), c.append(f)
            }
            a.append(c)
        };
    class HandleInstagram3 extends BaseElementLazyLoader {
        constructor({
            optionObserver: e = {
                rootMargin: "400px 0px 0px 0px"
            },
            ...n
        }) {
            super(e), Object.assign(this, n), this.init()
        }
        async init() {
            const e = '[data-pf-type="Insta3"]',
                n = Array.from(document.querySelectorAll(e)),
                a = n.length;
            executeChunk(n, (r, o) => {
                this.observerElement(() => {
                    fetchData(r).then(i => {
                        if (i) {
                            const s = r.getAttribute("data-lazyload") === "true";
                            appendHtmlToDom(r, i, s), s && new SocialMediaFrameLoader({
                                containerElement: [r],
                                elementSelector: "video",
                                type: "video"
                            })
                        }
                        o === a - 1 && handleShopifyInitSlideshow('[data-pf-type="Insta3"]').catch(console.warn)
                    }).catch(console.error)
                }, r)
            })
        }
    }
    async function handleInstagram3() {
        return new HandleInstagram3({})
    }
    async function handleInstagram() {
        const t = window.document.querySelectorAll('[data-pf-type^="Instagram"]');
        async function e(n) {
            var c, d, l, u;
            const a = (c = getFrontEndSettings(n)) == null ? void 0 : c.token,
                r = (d = getFrontEndSettings(n)) == null ? void 0 : d.limit,
                o = (l = n.querySelector("div.pf-c img")) == null ? void 0 : l.closest("div.pf-c"),
                i = document.createElement("div"),
                s = n.getAttribute("data-pf-type") === "Instagram";
            if (i.className = s ? "pf-c" : "pf-c pf-slide", i.innerHTML += '<a target="_blank"><video controls preload="none"><source type="video/mp4"/></video></a>', a) {
                const h = await (await fetch(`${appProxyUrl}/instagram?limit=${r}`, {
                    headers: {
                        "X-Instagram-Access-Token": a
                    }
                })).json();
                if (Array.isArray(h == null ? void 0 : h.data)) {
                    const v = n.querySelector("&> div");
                    n.querySelectorAll(".pf-c").forEach(p => {
                        p.remove()
                    });
                    for (let p = 0; p < h.data.length; p++) {
                        let S = null;
                        h.data[p].media_type === "VIDEO" ? (S = i.cloneNode(!0), S.querySelector("video").setAttribute("poster", h.data[p].thumbnail_url), S.querySelector("source").setAttribute("src", h.data[p].media_url)) : (S = o.cloneNode(!0), (u = S.querySelector("img")) == null || u.setAttribute("src", h.data[p].media_url)), S.querySelector("a").setAttribute("href", h.data[p].permalink), v.append(S)
                    }
                }
            }
        }
        for (const n of t) await e(n);
        await handleShopifyInitSlideshow('[data-pf-type="Instagram2"]').catch(console.warn)
    }
    async function handleParagraph4() {
        const t = document.querySelectorAll('[data-pf-type^="Paragraph"]');
        t.length !== 0 && t.forEach(e => {
            const n = e.querySelector('[data-pf-type^="CompactButton"]');
            if (!!n && !isTextClamped(e)) {
                n.style.display = "none";
                return
            }
        })
    }

    function isTextClamped(t) {
        const e = t.querySelector(".pf-paragraph-content");
        if (!e) return !1;
        if (e.clientHeight !== 0 && e.scrollHeight !== 0) return e.scrollHeight > e.clientHeight;
        const n = t.cloneNode(!0);
        n.style.opacity = "0";
        const a = t.closest('[data-pf-type^="Accordion"]');
        a && (n.style.width = `${a.clientWidth}px`), document.body.appendChild(n);
        const r = n.querySelector(".pf-paragraph-content"),
            o = r.scrollHeight,
            i = r.clientHeight;
        return n.remove(), o > i
    }
    /* @preserve
        _____ __ _     __                _
       / ___// /(_)___/ /___  ____      (_)___
      / (_ // // // _  // -_)/ __/_    / /(_-<
      \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                                  |___/

      Version: 1.7.4
      Author: Nick Piscitelli (pickykneee)
      Website: https://nickpiscitelli.com
      Documentation: http://nickpiscitelli.github.io/Glider.js
      License: MIT License
      Release Date: October 25th, 2018

    */
    (function(t) {
        typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : t()
    })(function() {
        var t = typeof window < "u" ? window : this,
            e = t.Glider = function(a, r) {
                var o = this;
                if (a._glider) return a._glider;
                if (o.ele = a, o.ele.classList.add("glider"), o.ele._glider = o, o.opt = Object.assign({}, {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        resizeLock: !0,
                        duration: .5,
                        easing: function(i, s, c, d, l) {
                            return d * (s /= l) * s + c
                        }
                    }, r), o.animate_id = o.page = o.slide = 0, o.arrows = {}, o._opt = o.opt, o.opt.skipTrack) o.track = o.ele.children[0];
                else
                    for (o.track = document.createElement("div"), o.ele.appendChild(o.track); o.ele.children.length !== 1;) o.track.appendChild(o.ele.children[0]);
                o.track.classList.add("glider-track"), o.init(), o.resize = o.init.bind(o, !0), o.event(o.ele, "add", {
                    scroll: o.updateControls.bind(o)
                }), o.event(t, "add", {
                    resize: o.resize
                })
            },
            n = e.prototype;
        return n.init = function(a, r) {
            var o = this,
                i = 0,
                s = 0;
            o.slides = o.track.children, [].forEach.call(o.slides, function(l, u) {
                l.classList.add("glider-slide"), l.setAttribute("data-gslide", u)
            }), o.containerWidth = o.ele.clientWidth;
            var c = o.settingsBreakpoint();
            if (r || (r = c), o.opt.slidesToShow === "auto" || typeof o.opt._autoSlide < "u") {
                var d = o.containerWidth / o.opt.itemWidth;
                o.opt._autoSlide = o.opt.slidesToShow = o.opt.exactWidth ? d : Math.max(1, Math.floor(d))
            }
            o.opt.slidesToScroll === "auto" && (o.opt.slidesToScroll = Math.floor(o.opt.slidesToShow)), o.itemWidth = o.opt.exactWidth ? o.opt.itemWidth : o.containerWidth / o.opt.slidesToShow, [].forEach.call(o.slides, function(l) {
                l.style.height = "auto", l.style.width = o.itemWidth + "px", i += o.itemWidth, s = Math.max(l.offsetHeight, s)
            }), o.track.style.width = i + "px", o.trackWidth = i, o.isDrag = !1, o.preventClick = !1, o.opt.resizeLock && o.scrollTo(o.slide * o.itemWidth, 0), (c || r) && (o.bindArrows(), o.buildDots(), o.bindDrag()), o.updateControls(), o.emit(a ? "refresh" : "loaded")
        }, n.bindDrag = function() {
            var a = this;
            a.mouse = a.mouse || a.handleMouse.bind(a);
            var r = function() {
                    a.mouseDown = void 0, a.ele.classList.remove("drag"), a.isDrag && (a.preventClick = !0), a.isDrag = !1
                },
                o = {
                    mouseup: r,
                    mouseleave: r,
                    mousedown: function(i) {
                        const s = i.target;
                        ["SELECT", "INPUT", "TEXTAREA"].includes(s.tagName) ? a.preventClick = !1 : (i.preventDefault(), i.stopPropagation(), a.mouseDown = i.clientX, a.ele.classList.add("drag"))
                    },
                    mousemove: a.mouse,
                    click: function(i) {
                        a.preventClick && (i.preventDefault(), i.stopPropagation()), a.preventClick = !1
                    }
                };
            a.ele.classList.toggle("draggable", a.opt.draggable === !0), a.event(a.ele, "remove", o), a.opt.draggable && a.event(a.ele, "add", o)
        }, n.buildDots = function() {
            var a = this;
            if (!a.opt.dots) {
                a.dots && (a.dots.innerHTML = "");
                return
            }
            if (typeof a.opt.dots == "string" ? a.dots = document.querySelector(a.opt.dots) : a.dots = a.opt.dots, !!a.dots) {
                a.dots.innerHTML = "", a.dots.classList.add("glider-dots");
                for (var r = 0; r < Math.ceil(a.slides.length / a.opt.slidesToShow); ++r) {
                    var o = document.createElement("button");
                    o.dataset.index = r, o.setAttribute("aria-label", "Page " + (r + 1)), o.setAttribute("role", "tab"), o.className = "glider-dot " + (r ? "" : "active"), a.event(o, "add", {
                        click: a.scrollItem.bind(a, r, !0)
                    }), a.dots.appendChild(o)
                }
            }
        }, n.bindArrows = function() {
            var a = this;
            if (!a.opt.arrows) {
                Object.keys(a.arrows).forEach(function(r) {
                    var o = a.arrows[r];
                    a.event(o, "remove", {
                        click: o._func
                    })
                });
                return
            }["prev", "next"].forEach(function(r) {
                var o = a.opt.arrows[r];
                o && (typeof o == "string" && (o = document.querySelector(o)), o && (o._func = o._func || a.scrollItem.bind(a, r), a.event(o, "remove", {
                    click: o._func
                }), a.event(o, "add", {
                    click: o._func
                }), a.arrows[r] = o))
            })
        }, n.updateControls = function(a) {
            var r = this;
            a && !r.opt.scrollPropagate && a.stopPropagation();
            var o = r.containerWidth >= r.trackWidth;
            r.opt.rewind || (r.arrows.prev && (r.arrows.prev.classList.toggle("disabled", r.ele.scrollLeft <= 0 || o), r.arrows.prev.classList.contains("disabled") ? r.arrows.prev.setAttribute("aria-disabled", !0) : r.arrows.prev.setAttribute("aria-disabled", !1)), r.arrows.next && (r.arrows.next.classList.toggle("disabled", Math.ceil(r.ele.scrollLeft + r.containerWidth) >= Math.floor(r.trackWidth) || o), r.arrows.next.classList.contains("disabled") ? r.arrows.next.setAttribute("aria-disabled", !0) : r.arrows.next.setAttribute("aria-disabled", !1))), r.slide = Math.round(r.ele.scrollLeft / r.itemWidth), r.page = Math.round(r.ele.scrollLeft / r.containerWidth);
            var i = r.slide + Math.floor(Math.floor(r.opt.slidesToShow) / 2),
                s = Math.floor(r.opt.slidesToShow) % 2 ? 0 : i + 1;
            Math.floor(r.opt.slidesToShow) === 1 && (s = 0), r.ele.scrollLeft + r.containerWidth >= Math.floor(r.trackWidth) && (r.page = r.dots ? r.dots.children.length - 1 : 0), [].forEach.call(r.slides, function(c, d) {
                var l = c.classList,
                    u = l.contains("visible"),
                    f = r.ele.scrollLeft,
                    h = r.ele.scrollLeft + r.containerWidth,
                    v = r.itemWidth * d,
                    y = v + r.itemWidth;
                [].forEach.call(l, function(S) {
                    /^left|right/.test(S) && l.remove(S)
                }), l.toggle("active", r.slide === d), i === d || s && s === d ? l.add("center") : (l.remove("center"), l.add([d < i ? "left" : "right", Math.abs(d - (d < i ? i : s || i))].join("-")));
                var p = Math.ceil(v) >= Math.floor(f) && Math.floor(y) <= Math.ceil(h);
                l.toggle("visible", p), p !== u && r.emit("slide-" + (p ? "visible" : "hidden"), {
                    slide: d
                })
            }), r.dots && [].forEach.call(r.dots.children, function(c, d) {
                c.classList.toggle("active", r.page === d)
            }), a && r.opt.scrollLock && (clearTimeout(r.scrollLock), r.scrollLock = setTimeout(function() {
                clearTimeout(r.scrollLock), Math.abs(r.ele.scrollLeft / r.itemWidth - r.slide) > .02 && (r.mouseDown || r.trackWidth > r.containerWidth + r.ele.scrollLeft && r.scrollItem(r.getCurrentSlide()))
            }, r.opt.scrollLockDelay || 250))
        }, n.getCurrentSlide = function() {
            var a = this;
            return a.round(a.ele.scrollLeft / a.itemWidth)
        }, n.scrollItem = function(a, r, o) {
            o && (o.preventDefault(), o.stopPropagation()), r != null && r.preventDefault && r.preventDefault();
            var i = this,
                s = a;
            if (++i.animate_id, r === !0) a = a * i.containerWidth, a = Math.round(a / i.itemWidth) * i.itemWidth;
            else {
                if (typeof a == "string") {
                    var c = a === "prev";
                    if (i.opt.slidesToScroll % 1 || i.opt.slidesToShow % 1 ? a = i.getCurrentSlide() : a = i.slide, c ? a -= i.opt.slidesToScroll : a += i.opt.slidesToScroll, i.opt.rewind) {
                        var d = i.ele.scrollLeft;
                        a = c && !d ? i.slides.length : !c && Math.ceil(d + i.containerWidth) >= Math.floor(i.trackWidth) ? 0 : a
                    }
                }
                a = Math.max(Math.min(a, i.slides.length), 0), i.slide = a, a = i.itemWidth * a
            }
            return i.scrollTo(a, i.opt.duration * Math.abs(i.ele.scrollLeft - a), function() {
                i.updateControls(), i.emit("animated", {
                    value: s,
                    type: typeof s == "string" ? "arrow" : r ? "dot" : "slide"
                })
            }), !1
        }, n.settingsBreakpoint = function() {
            var a = this,
                r = a._opt.responsive;
            if (r) {
                r.sort(function(c, d) {
                    return d.breakpoint - c.breakpoint
                });
                for (var o = 0; o < r.length; ++o) {
                    var i = r[o];
                    if (t.innerWidth >= i.breakpoint) return a.breakpoint !== i.breakpoint ? (a.opt = Object.assign({}, a._opt, i.settings), a.breakpoint = i.breakpoint, !0) : !1
                }
            }
            var s = a.breakpoint !== 0;
            return a.opt = Object.assign({}, a._opt), a.breakpoint = 0, s
        }, n.scrollTo = function(a, r, o) {
            var i = this,
                s = new Date().getTime(),
                c = i.animate_id,
                d = function() {
                    var l = new Date().getTime() - s;
                    i.ele.scrollLeft = i.ele.scrollLeft + (a - i.ele.scrollLeft) * i.opt.easing(0, l, 0, 1, r), l < r && c === i.animate_id ? t.requestAnimationFrame(d) : (i.ele.scrollLeft = a, o && o.call(i))
                };
            t.requestAnimationFrame(d)
        }, n.removeItem = function(a) {
            var r = this;
            r.slides.length && (r.track.removeChild(r.slides[a]), r.refresh(!0), r.emit("remove"))
        }, n.addItem = function(a) {
            var r = this;
            r.track.appendChild(a), r.refresh(!0), r.emit("add")
        }, n.handleMouse = function(a) {
            var r = this;
            r.mouseDown && (r.isDrag = !0, r.ele.scrollLeft += (r.mouseDown - a.clientX) * (r.opt.dragVelocity || 3.3), r.mouseDown = a.clientX)
        }, n.round = function(a) {
            var r = this,
                o = r.opt.slidesToScroll % 1 || 1,
                i = 1 / o;
            return Math.round(a * i) / i
        }, n.refresh = function(a) {
            var r = this;
            r.init(!0, a)
        }, n.setOption = function(a, r) {
            var o = this;
            o.breakpoint && !r ? o._opt.responsive.forEach(function(i) {
                i.breakpoint === o.breakpoint && (i.settings = Object.assign({}, i.settings, a))
            }) : o._opt = Object.assign({}, o._opt, a), o.breakpoint = 0, o.settingsBreakpoint()
        }, n.destroy = function() {
            var a = this,
                r = a.ele.cloneNode(!0),
                o = function(i) {
                    i.removeAttribute("style"), [].forEach.call(i.classList, function(s) {
                        /^glider/.test(s) && i.classList.remove(s)
                    })
                };
            r.children[0].outerHTML = r.children[0].innerHTML, o(r), [].forEach.call(r.getElementsByTagName("*"), o), a.ele.parentNode.replaceChild(r, a.ele), a.event(t, "remove", {
                resize: a.resize
            }), a.emit("destroy")
        }, n.emit = function(a, r) {
            var o = this,
                i = new t.CustomEvent("glider-" + a, {
                    bubbles: !o.opt.eventPropagate,
                    detail: r
                });
            o.ele.dispatchEvent(i)
        }, n.event = function(a, r, o) {
            var i = a[r + "EventListener"].bind(a);
            Object.keys(o).forEach(function(s) {
                i(s, o[s])
            })
        }, e
    });
    window.__pagefly_slideshows__ = {};
    async function handleSliderHeight(t) {
        const e = Array.from(t.querySelectorAll('.glider-slide.visible [data-pf-type="Slide2"]'));
        await e.map((s, c) => s.removeAttribute("style"));
        const n = e.map(s => (s == null ? void 0 : s.getBoundingClientRect().height) || 0),
            a = Math.max(...n),
            r = t.querySelector(".glider-track"),
            o = r ? r == null ? void 0 : r.getBoundingClientRect().height : 0,
            i = r == null ? void 0 : r.getBoundingClientRect().width;
        o && r.setAttribute("style", `width: ${i}px; height: ${o}px`), a !== o && a && r && r.setAttribute("style", `width: ${i}px; height: ${a}px`), await e.map((s, c) => s.setAttribute("style", "height: 100%"))
    }
    const resizeSlideObserver = (t, e) => {
        if (!t) return;
        const n = new ResizeObserver(e);
        t.querySelectorAll(".glide-container").forEach(r => n.observe(r))
    };

    function getSliderData(t) {
        const e = t == null ? void 0 : t.getAttribute("data-slider");
        return { ...JSON.parse(e == null ? void 0 : e.replace(/'/g, '"'))
        }
    }
    const refresh = t => {
            if (!t) return;
            const e = setInterval(() => {
                isNaN(t == null ? void 0 : t.slide) ? t == null || t.refresh() : clearInterval(e)
            }, 100)
        },
        addPreloadStyle = (t, e, n) => {
            if (!t || (t == null ? void 0 : t.querySelector(".glider-track"))) return;
            const a = getDevice(),
                r = t.querySelector(".glider"),
                o = r.getAttribute("style");
            let i = "";
            for (let s = 0; s < n[a]; s++) i = `${i}1fr `;
            r.setAttribute("style", `${o}; display: grid; grid-template-columns: ${i}`), e.forEach((s, c) => {
                c < n[a] || s.setAttribute("style", "display: none")
            }), t.setAttribute("style", "visibility: visible; opacity: 1;")
        },
        removePreloadStyle = (t, e, n) => {
            if (!t || !(t != null && t.querySelector(".glider-track"))) return;
            const a = getDevice(),
                r = t.querySelector(".glider"),
                o = r.getAttribute("style");
            let i = "";
            for (let s = 0; s < n[a]; s++) i = `${i}1fr `;
            r.setAttribute("style", o.replace(`display: grid; grid-template-columns: ${i}`, "")), e.forEach((s, c) => {
                if (c < n[a]) return;
                const d = s.getAttribute("style");
                s.setAttribute("style", d.replace("display: none", ""))
            })
        },
        handleImageOnClick = t => {
            const e = t.querySelectorAll("img");
            for (const n of e) n.addEventListener("mousedown", () => {
                const a = () => {
                        n.style.pointerEvents = "none"
                    },
                    r = () => {
                        n.style.pointerEvents = "auto", document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", r)
                    };
                document.addEventListener("mousemove", a), document.addEventListener("mouseup", r)
            })
        };
    async function handleSlideshowVersion1and2(t) {
        const e = getDevice();
        if (!t) {
            const n = document.querySelectorAll("[data-slider][data-pf-type]");
            t = Array.from(n)
        }
        if (t.length) {
            if (!window.Glider) {
                console.warn("GliderJS was not loaded successfully.");
                return
            }
            for (let n = 0; n < t.length; n++) {
                const a = t[n];
                handleImageOnClick(a);
                const r = Array.from(a.querySelectorAll(".glide-wrapper")),
                    o = a.getAttribute("data-pf-type"),
                    i = getSliderData(a),
                    {
                        slidesToShow: s,
                        slidesToScroll: c,
                        loop: d,
                        autoPlay: l,
                        autoPlayDelay: u,
                        maxHeight: f,
                        id: h,
                        pauseOnHover: v
                    } = i;
                addPreloadStyle(a, r, s);
                let y = { ...i,
                    slidesToScroll: c.mobile,
                    slidesToShow: s.mobile,
                    rewind: d,
                    draggable: !0,
                    scrollLock: !0,
                    dragVelocity: 1.1,
                    scrollLockDelay: 150,
                    arrows: {
                        prev: a.querySelector(".glider-prev"),
                        next: a.querySelector(".glider-next")
                    },
                    dots: a.querySelector(".glider-dots"),
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: s.tablet,
                            slidesToScroll: c.tablet,
                            draggable: !0
                        }
                    }, {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: s.laptop,
                            slidesToScroll: c.laptop
                        }
                    }, {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: s.all,
                            slidesToScroll: c.all
                        }
                    }]
                };
                ["mobile", "tablet"].includes(e) && (y = { ...y,
                    draggable: !1
                });
                const p = window.__pagefly_slideshows__[h] = new window.Glider(a.querySelector(".glider"), y);
                removePreloadStyle(a, r, s);
                let S = 0;
                const T = setInterval(() => {
                    S++, p.refresh(), a.style.visibility = "visible", a.style.opacity = 1, !f && o === "Slider2" && handleSliderHeight(a), S > 2 && clearInterval(T)
                }, 500);
                !f && o === "Slider2" && (handleSliderHeight(a), a.querySelector(".glider").addEventListener("glider-slide-visible", I => {
                    handleSliderHeight(a)
                }), resizeSlideObserver(a, debounce$1(() => handleSliderHeight(a), 100)), window.addEventListener("resize", debounce$1(() => handleSliderHeight(a), 500))), l && u > 0 && handleAutoPlay({
                    dom: a,
                    g: p,
                    autoPlayDelay: u,
                    pauseOnHover: v
                })
            }
        }
    }

    function handleAutoPlay({
        dom: t,
        g: e,
        autoPlayDelay: n,
        pauseOnHover: a
    }) {
        const r = new AutoplayTimer(function() {
                e.scrollItem("next")
            }, n || 3e3),
            o = () => {
                var c, d;
                (c = t.querySelectorAll(".glider-nav")) == null || c.forEach(l => {
                    l == null || l.addEventListener("click", () => {
                        r.destroy()
                    })
                }), (d = t.querySelectorAll(".glider-dot")) == null || d.forEach(l => {
                    l == null || l.addEventListener("click", () => {
                        r.destroy()
                    })
                })
            },
            i = () => {
                t.addEventListener("mouseover", c => {
                    r.pause()
                }), t.addEventListener("mouseout", c => {
                    r.resume()
                }), t.addEventListener("touchstart", c => {
                    r.pause()
                }), t.addEventListener("touchend", c => {
                    r.resume()
                })
            },
            s = () => {
                const c = {
                    rootMargin: "0px",
                    threshold: .25
                };
                let d = !1;
                new IntersectionObserver(function(u) {
                    u.forEach(f => {
                        f.isIntersecting ? (d = !0, r.start(), refresh(e)) : d && (d = !1, r.destroy(), setTimeout(() => {
                            e.scrollItem(0)
                        }, 1e3))
                    })
                }, c).observe(t)
            };
        a && o(), s(), a && i()
    }

    function AutoplayTimer(t, e) {
        let n = e,
            a = 0;
        this.pause = function() {
            clearInterval(a)
        }, this.resume = function() {
            this.start()
        }, this.start = function() {
            a = null, a = setInterval(() => {
                n = n - 1e3, n === 0 && (t(), n = e)
            }, 1e3)
        }, this.destroy = function() {
            clearInterval(a), n = e
        }
    }
    async function handleTab() {
        const t = document.querySelectorAll('[data-pf-type="Tabs"]');
        t.length > 0 && t.forEach(e => {
            e.querySelector('[data-pf-type="TabsMenu"]').addEventListener("click", a => {
                a.stopPropagation();
                const r = a.target,
                    o = r.closest('[data-pf-type="TabHeader"]') || r.closest('[data-pf-type="TabHeader2"]');
                if (!o) return;
                const i = [...o == null ? void 0 : o.parentElement.children],
                    s = [...o == null ? void 0 : o.parentElement.nextElementSibling.children],
                    c = i.indexOf(o),
                    d = i.filter(l => l !== i[c]);
                o && o.setAttribute("data-pf-tab-active", "true"), s.forEach((l, u) => {
                    if (u === c) {
                        l.style.display = "block", handleShopifyProductMedia(l).catch(console.error), handleShopifyProductMedia2(l).catch(console.error), l.querySelectorAll("[data-magnifier]").forEach(y => {
                            const p = y.querySelector(".zoom-image");
                            p && p.remove(), initZoomImage(y)
                        });
                        const h = l.querySelectorAll("[data-slider][data-pf-type]"),
                            v = Array.from(h);
                        if (v.length)
                            for (let y = 0; y < v.length; y++) v[y].removeAttribute("style"), handleSlideshowVersion1and2(v)
                    } else l.style.display = "none"
                }), d.forEach(l => {
                    l.setAttribute("data-pf-tab-active", "false")
                })
            })
        })
    }

    function debounce(t, e) {
        let n;
        return function() {
            const a = arguments;
            clearTimeout(n), n = setTimeout(function() {
                t.apply(this, a)
            }, e)
        }
    }
    class PFTabs {
        constructor(e, n, a, r) {
            b(this, "selectorTab");
            b(this, "selectorTabMenu");
            b(this, "selectorTabHeader");
            b(this, "selectorDropDown");
            this.selectorTab = e || "Tabs3", this.selectorTabMenu = n || "TabsMenu3", this.selectorTabHeader = a || "TabHeader3", this.selectorDropDown = r || "DropdownButton", this.init()
        }
        init() {
            const e = Array.from(document.querySelectorAll(`[data-pf-type="${this.selectorTab}"]`));
            if (!!e.length)
                if (!("IntersectionObserver" in window)) e.forEach(n => this.run(n));
                else {
                    const n = new IntersectionObserver((a, r) => {
                        a.forEach(o => {
                            if (o.isIntersecting) {
                                const i = o.target;
                                this.run(i), r.unobserve(i)
                            }
                        })
                    }, {
                        threshold: .1
                    });
                    e.forEach(a => {
                        n == null || n.observe(a)
                    })
                }
        }
        run(e) {
            const n = e.querySelector(`[data-pf-type="${this.selectorTabMenu}"]`),
                a = e.querySelector(".pf-tab-prev-btn"),
                r = e.querySelector(".pf-tab-next-btn"),
                o = Array.from(n.querySelectorAll(`[data-pf-type="${this.selectorTabHeader}"]`)),
                i = e.querySelector(`[data-pf-type="${this.selectorDropDown}"]`);
            this.handleScrollWhenFirstLoad(n), this.handleDisplayNavigation(n, a, r, i), this.setupListeners(e, n, a, r, i, o)
        }
        setupListeners(e, n, a, r, o, i) {
            const s = e.getAttribute("data-radio-name"),
                c = e.querySelectorAll(`[name="pf-tabs-${s}"]`),
                d = o.querySelector(".pf-tab-dropdown-icon"),
                l = e.querySelector(":scope > .tab3-headers-wrapper");
            n == null || n.addEventListener("click", u => this.handleClickTabHeader(u, n, i, o)), r == null || r.addEventListener("click", () => this.handleClickNextBtn(n)), a == null || a.addEventListener("click", () => this.handleClickPrevBtn(n));
            for (let u = 0; u < c.length; u++) c[u].addEventListener("change", f => {
                let h = f.target.id;
                e.querySelector('[data-pf-tab-active="true"]').setAttribute("data-pf-tab-active", "false");
                const v = e.querySelector(`[for="${h}"]`),
                    y = this.getActiveTabScrollValue(n, v);
                n == null || n.scrollTo({ ...y,
                    behavior: "smooth"
                }), v.setAttribute("data-pf-tab-active", "true")
            });
            n == null || n.addEventListener("scroll", debounce(() => {
                this.handleDisplayNavigation(n, a, r, o)
            }, 10)), n == null || n.addEventListener("keydown", u => {
                (u.key === "ArrowRight" || u.key === "ArrowLeft") && u.preventDefault()
            }), o == null || o.addEventListener("click", u => {
                u.stopPropagation(), o.focus(), this.handleDropDownMode(n, o, d)
            }), l.addEventListener("focusout", u => {
                (!l.contains(u.target) || !l.contains(u.relatedTarget)) && this.handleDropDownMode(n, o, d)
            })
        }
        handleClickTabHeader(e, n, a, r) {
            e.preventDefault();
            const o = e.target,
                i = o == null ? void 0 : o.closest("label"),
                s = document.querySelector(`#${i.getAttribute("for")}`);
            s.checked = !0;
            const c = o.closest(`[data-pf-type="${this.selectorTabHeader}"]`),
                d = r.clientHeight === 0 && r.clientWidth === 0;
            if (!c || c.getAttribute("data-pf-tab-active") === "true" && d) return;
            const l = this.getActiveTabScrollValue(n, c);
            this.removeAllActiveStatus(a), c.setAttribute("data-pf-tab-active", "true"), n == null || n.scrollTo({ ...l,
                behavior: "smooth"
            }), d || (r.querySelector(".pf-tab-dropdown-text").innerHTML = c == null ? void 0 : c.innerHTML, r.title = c == null ? void 0 : c.innerText)
        }
        handleClickNextBtn(e) {
            const n = this.getScrollValue(e, "next");
            e == null || e.scrollTo({
                top: n.top || 0,
                left: n.left || 0,
                behavior: "smooth"
            })
        }
        handleClickPrevBtn(e) {
            const n = this.getScrollValue(e, "prev");
            e == null || e.scrollTo({
                top: n.top || 0,
                left: n.left || 0,
                behavior: "smooth"
            })
        }
        handleDisplayNavigation(e, n, a, r) {
            if (!(!n || !a) && !(r.clientHeight !== 0 && r.clientWidth !== 0)) {
                if (n.style.visibility = "visible", a.style.visibility = "visible", (e == null ? void 0 : e.scrollLeft) === 0 && (e == null ? void 0 : e.scrollTop) === 0) {
                    n.style.visibility = "hidden";
                    return
                }
                if (e.scrollLeft + 1 >= e.scrollWidth - e.clientWidth && e.scrollTop + 1 >= e.scrollHeight - e.clientHeight) {
                    a.style.visibility = "hidden";
                    return
                }
            }
        }
        getScrollValue(e, n) {
            let a = {},
                r = Array.from(e.querySelectorAll(`[data-pf-type="${this.selectorTabHeader}"]`));
            if (n === "next")
                for (let o = 0; o < r.length; o++) {
                    const i = r[o],
                        s = i.offsetLeft,
                        c = i.offsetHeight,
                        d = i.offsetWidth,
                        l = i.offsetTop,
                        u = (e == null ? void 0 : e.scrollTop) || 0,
                        f = (e == null ? void 0 : e.scrollLeft) || 0,
                        h = (e == null ? void 0 : e.offsetHeight) || 0,
                        v = (e == null ? void 0 : e.offsetWidth) || 0,
                        y = s + d,
                        p = l + c;
                    if (!a.top && p > Math.round(u + h) && (a.top = l + c - h), !a.left && y > Math.round(f + v) && (a.left = s + d - v), a.left || a.top) return a
                }
            if (n === "prev") {
                r = r.reverse();
                const o = (e == null ? void 0 : e.scrollLeft) || 0,
                    i = (e == null ? void 0 : e.scrollTop) || 0;
                for (let s = 0; s < r.length; s++) {
                    const c = r[s],
                        d = c.offsetLeft,
                        l = c.offsetTop;
                    if (!a.left && d < Math.floor(o) && (a.left = d), !a.top && l < Math.floor(i) && (a.top = l), a.left || a.top) return a
                }
            }
            return a
        }
        getActiveTabScrollValue(e, n) {
            let a = {};
            const r = n.offsetLeft,
                o = n.offsetTop,
                i = (e == null ? void 0 : e.scrollLeft) || 0,
                s = (e == null ? void 0 : e.clientHeight) || 0,
                c = (e == null ? void 0 : e.clientWidth) || 0,
                d = n.offsetWidth,
                l = n.offsetHeight,
                u = (e == null ? void 0 : e.scrollTop) || 0;
            return n && (!a.left && r < Math.floor(i) ? a.left = r : !a.left && r + d > i + c && (a.left = r + d - c), !a.top && o < Math.floor(u) ? a.top = o : !a.top && o + l > u + s && (a.top = o + l - s), a.left || a.top), a
        }
        handleDropDownMode(e, n, a) {
            e.classList.toggle("pf-tab-menu-hide"), (a == null ? void 0 : a.classList.contains("pf-dropdown-collapse")) ? a == null || a.classList.remove("pf-dropdown-collapse") : a == null || a.classList.add("pf-dropdown-collapse"), window.scrollTo({
                top: n.getBoundingClientRect().top + window.scrollY - n.offsetHeight,
                behavior: "smooth"
            })
        }
        handleScrollWhenFirstLoad(e) {
            const n = e.querySelector('[data-pf-tab-active="true"]'),
                a = this.getActiveTabScrollValue(e, n);
            e.scrollTo({ ...a,
                behavior: "smooth"
            })
        }
        removeAllActiveStatus(e) {
            e.forEach(n => {
                n.setAttribute("data-pf-tab-active", "false")
            })
        }
    }
    const handleTab3 = async () => {
        new PFTabs
    };
    async function handleAutoPlayYTVideo() {
        const t = document.querySelectorAll('.__pf [title="video_youtube"]:not(.pf-video-youtube-no-api)');
        t.length > 0 && t.forEach(e => {
            e.style.opacity = "1"
        })
    }
    async function handleBasicElement() {
        handleAction().catch(console.error), handleShopifyListElement().catch(console.error), handleSlideshowVersion1and2().catch(console.error), handleSlideshowVersion3().catch(console.error), handleAccordion().catch(console.error), handleAccordion3().catch(console.error), handleAnchorTabAccordion().catch(console.error), handleCountDown().catch(console.error), handleHTMLVideo2().catch(console.error), handleHTML5Video().catch(console.error), handleAutoPlayYTVideo().catch(console.error), handleTab().catch(console.error), handleTab3().catch(console.error), handleTwitterLoader().catch(console.error), handleFBLike2Loader().catch(console.error), handleFBPage2Loader().catch(console.error), handleInstagram().catch(console.error), handleInstagram3().catch(console.error), handleAdvancedGMapStandardLoading().catch(console.error), handleAdvancedGMapLazyLoading().catch(console.error), handleBasicGMapLazyLoading().catch(console.error), handleParagraph4().catch(console.error)
    }
    async function initAliReviews() {
        window.__pagefly_setting__ && document.querySelectorAll('[data-pf-type="AliReviews"] [pf-ar-element]').forEach(e => {
            const n = e == null ? void 0 : e.getAttribute("pf-widget-id"),
                a = document.querySelector(`[data-section-id="${n}"]`);
            a && !a.closest("[pf-ar-element]") && e && (a.style.display = "none", e.removeChild(e.firstChild), e.appendChild(a), a.style.display = "block")
        })
    }
    async function initRivyo() {
        const t = document.querySelector("#wc_review_section:not([data-pf-element])"),
            e = document.querySelector("#wc_review_section[data-pf-element]");
        if (t && e && (t.style.display = "none", !e.querySelector(".wc_review_layout_section"))) {
            const a = e.parentElement;
            for (; a.firstChild;) a.removeChild(a.firstChild);
            a.appendChild(t), t.style.display = "block"
        }
    }
    async function initGrowave() {
        const t = document.querySelectorAll("#ssw-widget-recommends-html");
        if (t && t.length) {
            const e = [...t].find(a => a.parentElement.id !== "pf-growave-review-widget"),
                n = document.querySelector("#pf-growave-review-widget");
            if (e instanceof HTMLDivElement && e && n) {
                for (e.style.display = "none"; n.firstChild;) n.removeChild(n.firstChild);
                n.appendChild(e), e.style.display = "block"
            }
        }
    }
    async function initOpinew() {
        const t = document.querySelector("#opinew-reviews-product-page-code:not([data-pf-element])"),
            e = document.querySelector("#opinew-reviews-product-page-code[data-pf-element]");
        if (t && e) {
            t.style.display = "none";
            const n = e.parentElement;
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(t), t.style.display = "block"
        }
    }
    async function initProductReviews() {
        const t = document.querySelector("#shopify-product-reviews:not([data-pf-element])"),
            e = document.querySelector("#shopify-product-reviews[data-pf-element]");
        if (t && e) {
            const n = e.parentElement;
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(t)
        }
    }

    function handleWiserElement(t) {
        const e = {
                new_arrival: "evm-new-arrivals-product",
                related_products: "evm-related-product",
                alsobought: "evm-also-bought-products",
                recently_products: "recently-viewed",
                featured_collections: "evm-featured-collections-product",
                recommended_products: "evm-recommended-products",
                trending_products: "trending-products",
                top_selling: "evm-most-popular-products"
            },
            n = document.querySelectorAll(`.${e[t]}`);
        !n || n.length >= 2 && n.forEach(a => {
            a.closest(`#pf_wiser_${t}`) || a.remove()
        })
    }
    async function initWiser() {
        handleWiserElement("new_arrival"), handleWiserElement("related_products"), handleWiserElement("alsobought"), handleWiserElement("recently_products"), handleWiserElement("featured_collections"), handleWiserElement("recommended_products"), handleWiserElement("trending_products"), handleWiserElement("top_selling")
    }

    function handleLimeSpotElement(t) {
        const e = document.querySelector(`limespot-box[data-box-type="${t}"]`);
        if (!e) return;
        const n = document.getElementById(`pf_limespot_${t}`);
        !n || n.contains(e) || n.appendChild(e)
    }
    async function initLimeSpot() {
        let t = 0;
        const e = setInterval(() => {
            handleLimeSpotElement("Popular"), handleLimeSpotElement("RecentViews"), handleLimeSpotElement("YouMayLike"), handleLimeSpotElement("Trending"), handleLimeSpotElement("CrossSell"), handleLimeSpotElement("BoughtTogether"), handleLimeSpotElement("NewArrival"), handleLimeSpotElement("Related"), handleLimeSpotElement("FeaturedCollection1"), handleLimeSpotElement("FeaturedCollection2"), handleLimeSpotElement("FeaturedCollection3"), handleLimeSpotElement("FeaturedCollection4"), ++t >= 10 && clearInterval(e)
        }, 1e3)
    }
    async function initReCharge() {
        const t = document.querySelectorAll('[data-pf-type="ReCharge"]');
        Array.from(t).forEach(e => {
            let n = 0;
            const a = setInterval(() => {
                if (n > 20 && clearInterval(a), n++, !e.querySelector(".rc_container")) {
                    const o = e.closest('[data-pf-type="ProductBox"]');
                    if (o) {
                        const i = o.querySelector(".rc_container");
                        i && (e.innerHTML = "", e.appendChild(i))
                    }
                }
            }, 500)
        })
    }
    async function initLooxReview() {
        const t = document.querySelector("#looxReviews"),
            e = document.querySelector('[data-pf-type="Loox"] > #looxReviews');
        if ((t == null ? void 0 : t.closest("[data-pf-type=ProductPreview]")) && e) {
            t.style.display = "none";
            const n = e.parentElement;
            n.removeChild(e), n.appendChild(t), t.style.display = "block"
        }
    }
    async function initPowr() {
        !document.querySelector('[data-pf-type="Powr"]') || (await loadJS("https://www.powr.io/powr.js?platform=shopify"), window.loadPowr && window.loadPowr())
    }
    async function initInfiniteOptionsShoppad() {
        var o;
        const t = document.querySelector("#infiniteoptions-container");
        if (!t) return;
        const e = (o = t.closest('[data-pf-type="ProductBox"]')) == null ? void 0 : o.getAttribute("data-product-id");
        window.productJSON = window.productJSON || window.__pageflyProducts[e], (i => {
            const s = i == null ? void 0 : i.closest('[data-pf-type="ProductBox"]');
            if (!s) return;
            const c = s.querySelector('[data-pf-type="ProductATC"]') || s.querySelector('[data-pf-type="ProductATC2"]');
            c && c.classList.add("pf-io-atc-btn")
        })(t);
        let a = 0;
        const r = setInterval(() => {
            a++, (t.querySelectorAll('[data-required="true"] input[type="hidden"][name]') || []).forEach(s => {
                s.setAttribute("required", "required"), s.removeAttribute("type"), s.style.position = "absolute", s.style.zIndex = "-1"
            }), (t.childNodes.length || a > 5) && clearInterval(r)
        }, 1e3)
    }
    async function initInkybay() {
        const t = setInterval(() => {
            var e;
            if (((e = window.customizable_pro_id_arr) == null ? void 0 : e.length) > 0) {
                clearInterval(t);
                const n = window.customizable_pro_id_arr;
                document.querySelectorAll('[data-pf-type="InkybayProductPersonalizer"]').forEach(r => {
                    const o = r.closest('[data-pf-type="ProductBox"]'),
                        i = o.dataset.productId;
                    if (n.includes(i)) {
                        r.style.setProperty("position", "relative");
                        const s = document.createElement("span");
                        s.setAttribute("style", "display: block; position: absolute; z-index: 1; top: 0; left: 0; background: transparent; width: 100%; height: 100%; cursor: pointer"), s.addEventListener("click", () => {
                            r.querySelector(`#inkybay_collection_customizeit_btn_${i}`).click()
                        }), r.prepend(s);
                        const c = o.querySelector('[data-pf-type="ProductQuantity"]');
                        c && (c.classList.add("inkybay_custom_product_hide_elements", "inkybay_option_product_hide_elements"), c.style.setProperty("display", "none", "important"));
                        const d = o.querySelector('[data-pf-type="ProductATC"]') || o.querySelector('[data-pf-type="ProductATC2"]');
                        d && (d.classList.add("inkybay_custom_product_hide_elements", "inkybay_option_product_hide_elements"), d.style.setProperty("display", "none", "important"));
                        const l = o.querySelector('[data-pf-type="ProductVariantSwatches"]');
                        l && (l.classList.add("inkybay_custom_product_hide_elements", "inkybay_option_product_hide_elements"), l.style.setProperty("display", "none", "important"))
                    } else r.style.setProperty("display", "none", "important")
                })
            }
        }, 100)
    }
    async function initVitalsTrustBadge() {
        const t = document.querySelector("#bundle-trust_badges"),
            e = t == null ? void 0 : t.innerHTML;
        document.querySelectorAll("#bundle-trust_badges").forEach(a => {
            a.innerHTML = e
        })
    }
    const initTrackingMoreElement = async () => {
        if (document.querySelector('[data-pf-type="TrackingMore"]')) {
            const t = document.createElement("script"),
                e = new Date,
                n = e.getFullYear(),
                a = e.getMonth() + 1,
                r = e.getDate() + 1;
            t.src = `//admin.trackingmore.net/static/js/tm_loadFrame.js?time=${n}${a}${r%7}`, document.querySelector(".tm_main").parentNode.insertBefore(t, document.querySelector(".tm_main").nextSibling)
        }
    };
    async function initGloboBackInStock() {
        const t = document.querySelector('[data-pf-type="GloboBackInStock"]');
        if (!t) return;
        const e = t.parentElement.parentElement.parentElement.parentElement,
            n = new Promise((a, r) => {
                a("Success!")
            });
        e.className.indexOf("hideBuyNowBtn") > -1 ? n.then(() => {
            n.then(() => e.querySelector('[data-pf-type="ProductATC2"]').style.display = "none")
        }) : n.then(() => {
            e.querySelector('[data-pf-type="ProductATC2"]').style.display = "block"
        })
    }
    async function handleThirdPartyElements() {
        initAliReviews().catch(console.error), initRivyo().catch(console.error), initGrowave().catch(console.error), initOpinew().catch(console.error), initProductReviews().catch(console.error), initWiser().catch(console.error), initLimeSpot().catch(console.error), initReCharge().catch(console.error), initLooxReview().catch(console.error), initPushOwl().catch(console.error), initPowr().catch(console.error), initInfiniteOptionsShoppad().catch(console.error), initBIS().catch(console.error), initInkybay().catch(console.error), initVitalsTrustBadge().catch(console.error), initTrackingMoreElement().catch(console.error), initGloboBackInStock().catch(console.error)
    }
    const PAGEFLY_ANIMATION_CSS = "pagefly-animation";

    function getOffset(t) {
        const e = document.body.getBoundingClientRect(),
            n = t.getBoundingClientRect();
        return {
            top: n.top - e.top,
            height: (t.offsetHeight || n.height) / 4,
            clientRect: t.getBoundingClientRect()
        }
    }
    async function handleAnimation() {
        const t = window.innerHeight,
            e = document.querySelectorAll(".__pf [class*=animate]"),
            n = document.querySelectorAll(".__pf [data-popup-animation]"),
            a = document.querySelectorAll(".__pf [data-animation]");
        if (!document.querySelector(`link[href*="${PAGEFLY_ANIMATION_CSS}.css"]`) && (e.length || n.length || a.length)) {
            const i = document.createElement("link");
            i.rel = "stylesheet", i.href = `${pfSetting.cdnURL}/static/css/animation.css`, i.media = "print", i.onload = () => {
                i.media = "all"
            }, document.head.appendChild(i)
        }
        const o = [];
        for (let i = 0; i < a.length; i++) {
            o.push({
                element: a[i],
                position: window.pfCustomGetOffset ? window.pfCustomGetOffset(a[i]) : getOffset(a[i]),
                animation: a[i].getAttribute("data-animation")
            });
            const s = o[o.length - 1],
                c = s.animation;
            if (c) {
                const {
                    element: d
                } = s;
                c.toLowerCase().indexOf("in") !== -1 && (d.style.visibility = "hidden");
                const l = window.scrollY || document.body.scrollTop;
                s.position.top + s.position.height <= t + l && (d.style.visibility = "visible", d.setAttribute("class", `${d.getAttribute("class")||""} pf-animated ${c}`)), s.element.onanimationend = () => {
                    setTimeout(() => {
                        d.classList.remove("pf-animated")
                    }, 2e3)
                }
            }
        }
        document.addEventListener("scroll", i => {
            const s = window.scrollY || document.body.scrollTop,
                c = t + s;
            o.forEach(({
                element: d,
                position: l,
                animation: u
            }) => {
                const f = Number(d.dataset.offset) || 0;
                l.top + l.height + f < c && u && (d.classList.contains(u) || (d.style.visibility = "visible", d.setAttribute("class", `${d.getAttribute("class")||""} pf-animated ${u}`)))
            })
        }, !0)
    }

    function elementsHelperTrigger() {
        try {
            handleBasicElement().catch(console.error), handleShopifyProduct().catch(console.error), handleThirdPartyElements().catch(console.error), handleAnimation().catch(console.error)
        } catch (t) {
            console.error("PF elements helper error: ", t)
        }
    }
    async function handleLazyLoadBackgroundImage() {
        setTimeout(() => {
            if ("IntersectionObserver" in window) {
                const t = [].slice.call(document.querySelectorAll(".pf-bg-lazy")),
                    e = new IntersectionObserver(function(n, a) {
                        n.forEach(function(r) {
                            if (r.isIntersecting) {
                                const o = r.target;
                                o.classList.remove("pf-bg-lazy"), e.unobserve(o)
                            }
                        })
                    }, {
                        rootMargin: "5%"
                    });
                t.forEach(function(n) {
                    e.observe(n)
                })
            } else setTimeout(() => {
                document.querySelectorAll(".pf-bg-lazy").forEach(t => {
                    t.classList.remove("pf-bg-lazy")
                })
            }, 3e3)
        }), setTimeout(() => {
            document.querySelectorAll(".pf-bg-lazy").forEach(t => {
                t.classList.remove("pf-bg-lazy")
            })
        }, 1e4)
    }
    window.__pagefly__.handleLazyLoadBackgroundImage = handleLazyLoadBackgroundImage;
    class PFPagePrefetcher {
        constructor() {
            b(this, "lastTouchTimestamp");
            b(this, "mouseoverTimeout");
            b(this, "cachedURLToPrefetch");
            b(this, "prefetcher");
            b(this, "isDataSaverEnabled");
            b(this, "isPrefetchAvailable");
            b(this, "startTime");
            this.lastTouchTimestamp = 0, this.mouseoverTimeout = null, this.cachedURLToPrefetch = new Map, this.prefetcher = document.createElement("link"), this.prefetcher.id = "pf-prefetcher", this.isDataSaverEnabled = navigator.connection && navigator.connection.saveData, this.isPrefetchAvailable = this.prefetcher && this.prefetcher.relList.supports && this.prefetcher.relList.supports("prefetch"), this.startTime = 0, this.init()
        }
        init() {
            this.prefetcher.rel = "prefetch", this.prefetcher.as = "document", document.head.appendChild(this.prefetcher), this.bindEventHandler()
        }
        bindEventHandler() {
            document.addEventListener("touchstart", this.handleTouchstartEvent.bind(this), {
                capture: !0,
                passive: !0
            }), document.addEventListener("mouseover", this.handleMouseoverEvent.bind(this), {
                capture: !0,
                passive: !0
            }), this.prefetcher.onload = e => {
                const n = e.currentTarget;
                this.cachedURLToPrefetch.set(n.href, !0)
            }, this.prefetcher.onerror = e => {
                this.cachedURLToPrefetch.set(e.currentTarget.href, !0)
            }
        }
        handleTouchstartEvent(e) {
            this.lastTouchTimestamp = performance.now();
            const n = e.target.closest("a, [data-href]"),
                a = this.isPrefetchable(n);
            a && n && (n.addEventListener("touchcancel", this.handleTouchcancelAndTouchEndEvent.bind(this), {
                passive: !0
            }), n.addEventListener("touchend", this.handleTouchcancelAndTouchEndEvent.bind(this), {
                passive: !0
            }), this.prefetch(a))
        }
        handleTouchcancelAndTouchEndEvent(e) {
            this.stopPrefetching()
        }
        handleMouseoverEvent(e) {
            if (performance.now() - this.lastTouchTimestamp < 1100) return;
            const n = e.target.closest("a, [data-href]"),
                a = this.isPrefetchable(n);
            a && n && (n.addEventListener("mouseout", this.handleMouseoutEvent.bind(this), {
                passive: !0
            }), this.mouseoverTimeout = window.setTimeout(() => {
                this.prefetch(a), this.mouseoverTimeout && clearTimeout(this.mouseoverTimeout)
            }, 65))
        }
        handleMouseoutEvent(e) {
            const n = e.relatedTarget;
            (!n || e.target.closest("a, [data-href]") !== n.closest("a, [data-href]")) && this.stopPrefetching()
        }
        getAbsoluteUrl(e) {
            try {
                return new URL(e)
            } catch {
                return new URL(e, window.location.origin)
            }
        }
        isPrefetchable(e) {
            var r;
            if (!((e == null ? void 0 : e.hasAttribute("data-pf-type")) || (e == null ? void 0 : e.closest("[data-pf-type]"))) || ((r = e == null ? void 0 : e.href) == null ? void 0 : r.includes(location.href))) return !1;
            const n = (e == null ? void 0 : e.href) || (e == null ? void 0 : e.getAttribute("data-href")) || "";
            if (!n) return !1;
            const a = this.getAbsoluteUrl(n);
            return this.cachedURLToPrefetch.get(a.href) ? !1 : a.origin === location.origin && ["http:", "https:"].includes(a.protocol) && !(a.protocol === "http:" && location.protocol === "https:") && !(a.hash && a.pathname + a.search === location.pathname + location.search) && a.href
        }
        prefetch(e) {
            this.prefetcher.setAttribute("href", e), this.isPrefetchAvailable || this.prefetchViaXHR(e)
        }
        stopPrefetching() {
            this.prefetcher.removeAttribute("href")
        }
        prefetchViaXHR(e) {
            return new Promise((n, a) => {
                const r = new XMLHttpRequest;
                r.open("GET", e, !0), this.cachedURLToPrefetch.set(e, !0), r.onload = () => {
                    r.status >= 200 && r.status < 300 ? n() : a()
                }, r.onerror = () => a(), r.send()
            })
        }
    }
    const handlePrefetchAssets = async () => {
            var t, e;
            (e = (t = window.PAGEFLY) == null ? void 0 : t.page_optimization) != null && e.assets_prefetching && new PFPagePrefetcher
        },
        specificHelperCDN = ["https://cdn.pagefly.io/static/core/helper.js"],
        pageflyHelperContentLoaded = new CustomEvent("PageFlyHelperContentLoaded", {
            detail: {
                message: "Pagefly Helper is ready to execute..."
            }
        });
    document.dispatchEvent(pageflyHelperContentLoaded);
    const runHelper = () => {
        Array.from(document.querySelectorAll("script")).map(n => {
            const a = n.getAttribute("src");
            return specificHelperCDN.includes(a) ? "2.0.0" : getPFHelperVersion(a || "")
        }).filter(n => n).find(n => comparePFHelperVersion(n, STARTED_VERSION_USING_THEME_APP_EXTENSION) < 0) || (console.log("Run PageFly Theme Extension..."), elementsHelperTrigger(), handleLazyLoadBackgroundImage().catch(console.error), handlePrefetchAssets().catch(console.error))
    };
    runHelper();
    const runHelperOnThemeEditor = () => {
        var t;
        try {
            (t = window.Shopify) != null && t.designMode && document.addEventListener("shopify:section:load", function(e) {
                if (e.target.closest("[data-shopify-editor-section*=pagefly_section]")) {
                    const n = document.querySelectorAll("[data-shopify-editor-section*=pf-]"),
                        a = document.querySelectorAll("[data-shopify-editor-section*=pagefly_section]");
                    [...n, ...a].forEach(o => {
                        const i = o.cloneNode(!0);
                        o.replaceWith(i)
                    }), document.querySelectorAll("[data-pf-type=ProductQuantity]").forEach(o => {
                        o.removeAttribute("listener")
                    }), executeScriptElements(), runHelper()
                }
            })
        } catch (e) {
            console.error("Run helper on theme editor", e)
        }
    };
    runHelperOnThemeEditor();

    function executeScriptElements() {
        const t = document.querySelectorAll("script");
        Array.from(t).forEach(e => {
            if (!e.getAttribute("data-pf-activated")) {
                const n = document.createElement("script");
                Array.from(e.attributes).forEach(a => {
                    n.setAttribute(a.name, a.value)
                }), n.appendChild(document.createTextNode(e.innerHTML)), n.setAttribute("data-pf-activated", "true"), e.parentNode.replaceChild(n, e)
            }
        })
    }

    function PFLoadJS(t, e = document.body, n = !0, a = !1) {
        return new Promise((r, o) => {
            const i = e.ownerDocument;
            if (i.querySelector(`script[src="${t}"]`)) return r(!0);
            const s = i.createElement("script");
            s.src = t, s.async = n, s.defer = a, s.onload = r, s.onerror = o, e.appendChild(s)
        })
    }
    window.jQuery || PFLoadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");

    function handleImpactTheme() {
        fetch("/?section_id=cart-drawer").then(t => t.text()).then(t => {
            const n = new DOMParser().parseFromString(t, "text/html").getElementById("cart-drawer").innerHTML;
            $("#cart-drawer").html(n), $('[aria-controls="cart-drawer"]')[0].click(), $(".header__cart-count .count-bubble ").html(cart.item_count).css("opacity", 1)
        }).catch(t => console.error("Failed to update ccart Impact Theme", t))
    }

    function handleAthensTheme() {
        fetch("/cart?view=mini-cart").then(t => t.text()).then(t => {
            const n = new DOMParser().parseFromString(t, "text/html").getElementById("HeaderMiniCart");
            $("#HeaderMiniCart").html(n.innerHTML), $(".head-slot-cart-link .head-slot-cart-link-quantity").length > 0 ? $(".head-slot-cart-link .head-slot-cart-link-quantity").html(cart.item_count) : $(".head-slot-cart-link").append(`<span class="head-slot-cart-link-quantity">${cart.item_count}</span>`), $("a.head-slot-nav-link.head-slot-cart-link")[0].click()
        }).catch(t => console.error("Failed to update ccart Athens Theme", t))
    }

    function handleFlowTheme(t) {
        wetheme.updateCartDrawer(t), wetheme.toggleRightDrawer("cart", !0, {
            cart: t
        })
    }

    function handleGeckoTheme(t) {
        geckoShopify.onCartUpdate(1, 1, t.id)
    }

    function handleAltoTheme() {
        window.cart.getCart()
    }

    function handleDebutifyTheme() {
        theme.ajaxCart.update()
    }

    function handleAvoneTheme() {
        CartJS.getCart()
    }

    function handleShowtimeTheme(t) {
        Shopify.updateQuickCart(t)
    }

    function handleRebrandingTheme() {
        const t = {
            cartCountSelector: ".cartCountSelector",
            cartTotalSelector: ".cartTotalSelector"
        };
        var e = function(a) {
            $.ajax({
                type: "GET",
                url: a,
                complete: function(r) {
                    $("#cart-dropdown-span").html($("#cart-dropdown-span", r.responseText).html())
                }
            })
        };
        if ($(".cartCountSelector").length) {
            var n = $(t.cartCountSelector).html() || "0";
            $(t.cartCountSelector).html(n.replace(/[0-9]+/, cart.item_count)).removeClass("hidden"), $(".cartTotalSelector").html(Shopify.formatMoney(cart.total_price, theme.moneyFormat).replace(/((\,00)|(\.00))$/g, ""))
        }
        e()
    }

    function handleEnvyTheme(t) {
        wetheme.updateCartDrawer(t), wetheme.drawer.slideouts.right.open()
    }

    function handleMarkerTheme(t) {
        var e = t.item_count;
        return $(".cart--external--total-items").text(e), $.ajax({
            url: theme.classes.FrameworkCart.prototype.getAjaxUrl(),
            type: "GET",
            dataType: "html"
        }).done(function(n) {
            var a;
            a = $($.parseHTML(n)), $(".cart--root").attr("data-has-items", !0), $(".cart--root").find(".cart--form").replaceWith(a.find(".cart--form"))
        }), e > 0 ? ($(".cart--external--total-items").css("display", "inline-block"), $(".cart--external--total-items").parent().show()) : ($(".cart--external--total-items").not(".header--mobile-cart-count").hide(), $(".cart--external--total-items").not(".header--mobile-cart-count").parent().hide())
    }

    function handleExpressTheme() {
        var t = res.id;
        window.carts.forEach(function(e) {
            e.onCartUpdated(t)
        })
    }

    function handleImpulseTheme() {
        document.dispatchEvent(new CustomEvent("ajaxProduct:added", {
            detail: {
                product: res,
                addToCartBtn: ""
            }
        }))
    }

    function handleFocalTheme(t) {
        document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
            bubbles: !0
        })), document.getElementById("mini-cart").open = !0, document.querySelector("cart-count").innerText = t.item_count
    }

    function handleModularTheme(t, e) {
        Cart.buildCart(t), Cart.popover.show(e)
    }

    function handleFoodlyTheme() {
        updateDropdownCart(), document.querySelector(".cart-btn-container > a").click()
    }

    function handleWarehouseTheme() {
        document.dispatchEvent(new CustomEvent("product:added", {
            bubbles: !0,
            detail: {
                variant: res.variant_id,
                quantity: 1
            }
        }))
    }

    function handlePrestigeTheme(t) {
        try {
            document.dispatchEvent(new CustomEvent("product:added", {
                bubbles: !0,
                detail: {
                    variant: t.variant_id,
                    quantity: 1
                }
            }))
        } catch (e) {
            console.error("Failed to update cart Prestige Theme: ", e)
        }
    }

    function handleLammerTheme(t) {
        var e = t.variant_title !== null ? "<i>(" + t.variant_title + ")</i>" : "",
            n = $(".js-mini-cart").attr("data-cartmini");
        if (n != "true") {
            var a = '<div class="media mt-2 alert--cart"><a class="mr-3" href="/cart"><img class="lazyload" data-src="' + t.image + '"></a><div class="media-body align-self-center"><p class="m-0 font-weight-bold">' + t.product_title + " x " + t.quantity + "</p>" + e + "<div><div>";
            theme.alert.new(theme.strings.addToCartSuccess, a, 3e3, "notice")
        }
        theme.miniCart.updateElements(), theme.miniCart.generateCart()
    }

    function handleFurnTheme(t, e) {
        Shopify.onItemAdded(t), Shopify.onCartUpdate(e), jQuery("#modalAddToCart").modal("toggle"), document.querySelector(".popupimage").src = t.image
    }

    function handleTurboTheme(t) {
        window.refreshCart && window.refreshCart(t), $("#header").is(":visible") ? $("#header .cart-container").addClass("active_link") : $(".sticky_nav--stick").length ? $(".sticky_nav .cart-container").addClass("active_link") : $(".top-bar .cart-container").addClass("active_link"), window.PXUTheme.media_queries.medium.matches && ($(this).parent().hasClass("active_link"), $("body").addClass("blocked-scroll"), document.getElementById("header").classList.contains("mobile_nav-fixed--false") && window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        }))
    }

    function handleEmergeTheme(t) {
        fetch("/?snippets_id=cart").then(e => e.text()).then(e => {
            const a = new DOMParser().parseFromString(e, "text/html").querySelector('[data-active="cart"]');
            if (a) {
                const r = a.innerHTML;
                $('[data-active="cart"]').html(r), $(".header--cart-link").attr("data-has-items", "true"), $(".cart--external--total-items").text(t.item_count), $(".cart--external--total-price").text($(".cart--total--price.money").text()), $("a.header--cart-toggle")[0].click()
            }
        }).catch(e => console.log("Error: ", e))
    }

    function handleMinimogTheme(t, e) {
        Shopify.onItemAdded(e), Shopify.onCartUpdate(t)
    }

    function handleProvinceTheme(t) {
        const e = document.createElement("span");
        e.classList.add("item-count", "inline-block", "text-center"), document.querySelector(".cart").appendChild(e), e.innerHTML = t == null ? void 0 : t.item_count
    }

    function handleMotionTheme(t) {
        document.dispatchEvent(new CustomEvent("ajaxProduct:added", {
            detail: {
                product: t
            }
        }))
    }

    function handleEllaTheme() {
        setTimeout(function() {
            document.querySelector("#cart-icon-bubble").click()
        }, 400)
    }

    function handleBeYoursTheme(t) {
        fetch("/?sections=mini-cart,cart-icon-bubble").then(e => e.json()).then(e => {
            const n = document.querySelector("mini-cart");
            t.sections = e, n.renderContents(t)
        })
    }

    function handleQuarkTheme(t) {
        document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
            bubbles: !0,
            detail: {
                cart: t,
                openMiniCart: window.themeVariables.settings.cartType === "drawer" && this.closest(".drawer") === null
            }
        })), document.querySelectorAll('.header__icon-wrapper[aria-label="Cart"]')[0].click()
    }

    function handleLaunchTheme(t) {
        $(".header-cart-count").text(t.item_count), $(".header-cart-count").class("active")
    }

    function handleStockholmTheme(t) {
        fetch("/?snippets_id=cart-notification").then(e => e.text()).then(e => {
            const n = new DOMParser().parseFromString(e, "text/html"),
                a = n.getElementById("cart-notification").innerHTML;
            if (n.querySelector("#cart-notification .totals__subtotal-value").innerHTML, $("#cart-notification").html(a), $("cart-drawer").removeClass("is-empty"), $("cart-drawer-items").removeClass("is-empty"), $("#cart-icon-bubble .cart-count-bubble").length === 0) {
                const r = document.createElement("div");
                r.className = "cart-count-bubble", r.innerHTML = `
                    <span aria-hidden="true">${t.item_count}</span>
                    <span class="visually-hidden">${t.item_count} items</span>
                `, $("#cart-icon-bubble").append(r)
            } else $('.cart-count-bubble span[aria-hidden="true"]').each((r, o) => $(o).text(t.item_count));
            $("#cart-icon-bubble")[0].click(), $("#cart-notification-Overlay").on("click", () => {
                $("cart-drawer").removeClass("active"), $("body").removeClass("overflow-hidden")
            })
        })
    }

    function handleEmpireTheme(t, e) {
        const n = new CustomEvent("cartcount:update", {
            detail: e,
            res: t
        });
        window.dispatchEvent(n), $(".atc-banner--container").parent().css("display", "block"), $(".atc-banner--container").css({
            display: "block",
            top: "188px",
            position: "fixed"
        }), $(".atc-banner--container").attr("data-animation-state", "open"), $(".atc-banner--container [data-atc-banner-product-image]").html(`<img src="${t.image}" alt="${t.title}">`), $(".atc-banner--container [data-atc-banner-product-title]").html(t.title), $(".atc-banner--container [data-atc-banner-product-price-quantity]").html(`${t.quantity} \xD7 `), $(".atc-banner--container [data-atc-banner-cart-button] span").html(e.item_count), $(".atc-banner--container [data-atc-banner-product-discounts]").css("display", "none"), $(".atc-banner--container [data-atc-banner-product-price-value]").html(Shopify.formatMoney(t.price)), $(".atc-banner--container [data-atc-banner-close]").click(function() {
            $(".atc-banner--container").attr("data-animation-state", "close")
        }), window.scrollY > 188 ? $(".atc-banner--container").css("top", "70px") : $(".atc-banner--container").css("top", "188px"), $(window).scroll(function() {
            window.scrollY > 188 ? $(".atc-banner--container").css("top", "70px") : $(".atc-banner--container").css("top", "188px")
        })
    }

    function handleFreeShopifyTheme(t) {
        $.getJSON("/?sections=cart-notification-product,cart-notification-button,cart-drawer,cart-icon-bubble").then(e => {
            t.sections = e;
            const n = document.querySelector("cart-drawer") || document.querySelector("cart-notification");
            n ? (n.classList.remove("is-empty"), n.renderContents(t)) : $("#cart-icon-bubble")[0].click()
        })
    }

    function handleHandmadeTheme(t, e) {
        $.getJSON("/?sections=cart-notification-product,cart-notification-button,cart-icon-bubble").then(n => {
            const a = document.querySelector("cart-notification");
            t.sections = n;
            const r = document.querySelector(".cart-notification__count-value");
            r && (r.innerHTML = e.item_count);
            const o = document.querySelector(".totals__subtotal-value");
            o && (o.innerHTML = e.total_price / 100 + " " + e.currency), a.renderContents(t)
        })
    }

    function handleCanopyTheme(t) {
        return new Promise((e, n) => {
            try {
                $.post(theme.routes.cart_url + "/change.js", {
                    quantity: t.quantity,
                    id: t.variant_id
                }).done(a => {
                    theme.updateCartSummaries(a), e(a)
                }).fail(a => {
                    n(a)
                })
            } catch (a) {
                n(a)
            }
        })
    }

    function handleWebinopolyTheme() {
        $.get("/cart?view=json", function(t) {
            $(".cart-inner-content").html(t)
        }), $.getJSON("/cart.js", function(t) {
            $(".cart-total .cart-qty").html(t.item_count)
        }), frontendData.enableCurrency && (currenciesCallbackSpecial(".cart-wrapper .cart-inner span.money"), currenciesCallbackSpecial(".icon-cart-header span.money")), $(".cartloading").hide(), setTimeout(function() {
            $(".loader-container").hide(), $("#resultLoading").hide(), cartData.shopping_cart_action == "popup" && (box.addClass("d-block"), setTimeout(function() {
                box.removeClass("d-block")
            }, 5e3)), cartData.shopping_cart_action == "widget" && ($(".header-container").hasClass("sticky-header") ? $(".main-top-nav .mini-cart .cart-wrapper").fadeIn(200) : $(".mini-cart .cart-wrapper").fadeIn(200), timeoutNumber = setTimeout(function() {
                $(".mini-cart .cart-wrapper").fadeOut(200)
            }, 3500))
        }, 500)
    }

    function handleSymmetryTheme() {
        if (theme.settings.after_add_to_cart === "page") window.location = theme.routes.cart_url;
        else if (theme.settings.after_add_to_cart === "drawer") document.documentElement.dispatchEvent(new CustomEvent("theme:cartchanged", {
            bubbles: !0,
            cancelable: !1,
            detail: {
                openDrawer: !0
            }
        }));
        else if (theme.settings.after_add_to_cart === "notification") {
            document.documentElement.dispatchEvent(new CustomEvent("theme:cartchanged", {
                bubbles: !0,
                cancelable: !1
            }));
            var t = document.getElementById("AddedNotification").content.firstElementChild.cloneNode(!0);
            t.dataset.productTitle = response.product_title;
            var e = document.querySelector(".pageheader--sticky");
            e || (e = document.querySelector("body")), e.appendChild(t)
        }
    }

    function handleSpeedflyTheme(t) {
        document.querySelector("mini-cart").generateDom(t), $("a.header-cart-btn.header-action-cart.cart-toggle")[0].click()
    }
    const handleThemeImpulse = async () => {
        $("body").trigger("added.ajaxProduct")
    };
    let ajaxCartInitialized = !1;
    const handleThemeBrooklyn = async () => {
            !ajaxCartInitialized && window.ajaxCart && (window.ajaxCart.init({
                formSelector: "#AddToCartForm--product-template",
                cartContainer: "#CartContainer",
                addToCartSelector: "#AddToCart--product-template",
                enableQtySelectors: !0,
                moneyFormat: window.pfSetting.moneyFormat || "${{amount_with_comma_separator}}"
            }), ajaxCartInitialized = !0), $("body").trigger("ajaxCart.afterCartLoad", window.__pagefly_helper_store__.cart), $(".cart-link.js-drawer-open-button-right").trigger("click")
        },
        handleThemeDebut = async () => {
            var e;
            const {
                lastATCResult: t
            } = __pagefly_helper_store__;
            !window.pfProduct && window.theme.Product.toString().includes("$container") && (window.pfProduct = new window.theme.Product), typeof((e = window.pfProduct) == null ? void 0 : e._setupCartPopup) == "function" && window.pfProduct._setupCartPopup(t)
        },
        handleThemeVenue = async t => {
            const {
                item_count: e
            } = t;
            $("#CartCount").text(e), $(".js-cart-trigger").addClass("js-cart-full")
        },
        handleThemeParallax = t => {
            window.refreshCart && window.refreshCart(t), setTimeout(function() {
                $.fancybox.close(), $(".cart-button").click()
            }, 500)
        },
        handleThemeCurrentSite = async () => {
            window.ajaxCart.init({
                formSelector: ".add-to-cart__form",
                cartContainer: "#CartContainer",
                addToCartSelector: ".add-to-cart",
                enableQtySelectors: !0,
                moneyFormat: window.theme.strings.moneyFormat
            })
        },
        handleThemeExclusive = () => {
            $("body").trigger("added.ajaxProduct", '[data-pf-type*="ProductATC"]')
        },
        handleThemeFreeShopify = t => {
            const {
                item_count: e
            } = t;
            $(".cart-count-bubble > span").text(e)
        };
    try {
        setTimeout(function() {
            window.__pagefly_helper_store__ && window.__pagefly_helper_store__.subscribe(function(t) {
                var n, a;
                const e = window.__pagefly_theme_atc_check__ || ((n = window.Shopify.theme) == null ? void 0 : n.schema_name) || ((a = window.Shopify.theme) == null ? void 0 : a.name);
                $.getJSON("/cart.json").then(r => {
                    switch (!0) {
                        case /Impact/i.test(e):
                            handleImpactTheme();
                            break;
                        case /Athens/i.test(e):
                            handleAthensTheme();
                            break;
                        case /Alto/i.test(e):
                            handleAltoTheme();
                            break;
                        case /Debutify/i.test(e):
                            handleDebutifyTheme();
                            break;
                        case /Avone/i.test(e):
                            handleAvoneTheme();
                            break;
                        case /Gecko|Kalles/i.test(e):
                            handleGeckoTheme(t);
                            break;
                        case /Rebranding/i.test(e):
                            handleRebrandingTheme();
                            break;
                        case /Flow/i.test(e):
                            handleFlowTheme(r);
                            break;
                        case /Showtime/i.test(e):
                            handleShowtimeTheme(r);
                            break;
                        case /Envy/i.test(e):
                            handleEnvyTheme(r);
                            break;
                        case /Marker/i.test(e):
                            handleMarkerTheme(r);
                            break;
                        case /Express/i.test(e):
                            handleExpressTheme();
                            break;
                        case /Impulse/i.test(e):
                            handleImpulseTheme();
                            break;
                        case /Focal/i.test(e):
                            handleFocalTheme(r);
                            break;
                        case /Modular/i.test(e):
                            handleModularTheme(r, t);
                            break;
                        case /Modular/i.test(e):
                            handleFoodlyTheme();
                            break;
                        case /Prestige/i.test(e):
                            handlePrestigeTheme(t);
                            break;
                        case /Warehouse/i.test(e):
                            handleWarehouseTheme();
                            break;
                        case /Lammer/i.test(e):
                            handleLammerTheme(t);
                            break;
                        case /Minimog/i.test(e):
                            handleMinimogTheme(r, t);
                            break;
                        case /Furns - Furniture Shopify/i.test(e):
                            handleFurnTheme(t, r);
                            break;
                        case /Quark/i.test(e):
                            handleQuarkTheme(r);
                            break;
                        case /Launch/i.test(e):
                            handleLaunchTheme(r);
                            break;
                        case /Stockholm/i.test(e):
                            handleStockholmTheme(r);
                            break;
                        case /Dawn|Craft|Taste|Refresh|Sense/i.test(e):
                            handleFreeShopifyTheme(t);
                            break;
                        case /Providence/i.test(e):
                            handleProvinceTheme(r);
                        case /Motion/i.test(e):
                            handleMotionTheme(r);
                            break;
                        case /Ella/i.test(e):
                            handleEllaTheme();
                            break;
                        case /Be Yours/i.test(e):
                            handleBeYoursTheme(t);
                            break;
                        case /Handmade/i.test(e):
                            handleHandmadeTheme(t, r);
                            break;
                        case /RejuvAus/i.test(e):
                            handleWebinopolyTheme();
                            break;
                        case /Symmetry/i.test(e):
                            handleSymmetryTheme();
                            break;
                        case /Empire/i.test(e):
                            handleEmpireTheme(t, r);
                            break;
                        case /Speedfly/i.test(e):
                            handleSpeedflyTheme(r);
                            break;
                        case /Canopy/i.test(e):
                            handleCanopyTheme(t);
                            break;
                        case /Turbo/i.test(e):
                            handleTurboTheme(r);
                            break;
                        case /Emerge/i.test(e):
                            handleEmergeTheme(r);
                            break;
                        case /Impulse/i.test(e):
                            handleThemeImpulse();
                            break;
                        case /Brooklyn/i.test(e):
                            handleThemeBrooklyn();
                            break;
                        case /Debut/i.test(e):
                            handleThemeDebut();
                            break;
                        case /Venue/i.test(e):
                            handleThemeVenue(r);
                            break;
                        case /Parallax/i.test(e):
                            handleThemeParallax(r);
                            break;
                        case /Current Site|CurrentSite/i.test(e):
                            handleThemeCurrentSite();
                            break;
                        case /Exclusive/i.test(e):
                            handleThemeExclusive();
                            break;
                        case /Origin|Spotlight|Crave|Publisher|Colorblock|Studio|Ride/i.test(e):
                            handleThemeFreeShopify(r);
                            break
                    }
                }).catch(r => console.error(`Failed to update cart ${e}`, r))
            })
        }, 2500)
    } catch (t) {
        console.warn("PF ATC Error", t)
    }
})()