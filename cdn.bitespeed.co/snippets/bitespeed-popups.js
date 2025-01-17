const hostFilters = [
    'spotstyl.com',
    'spotstyl.myshopify.com'
]

function appendScript(source) {
    const e = document.createElement("script");
    e.type = "text/javascript", e.async = "true", e.defer = "true", e.src = source, e.crossOrigin = "anonymous", document.getElementsByTagName("head")[0].appendChild(e)
}

! function() {
    try {
        let host = window.location.host
        let flag = false;
        hostFilters.map(item => {
            if (host == item) flag = true
        })
        if (flag) return;
        appendScript("https://cdn.bitespeed.co/snippets/bitespeed-popups-code.js")
    } catch (e) {
        console.log("ERROR"), console.log(e)
    }
}();