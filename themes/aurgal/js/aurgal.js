!function(t,o){"use strict";o.behaviors.aurgal={attach:function(n,s){t(".btn-btt").smoothScroll({speed:1e3}),""===t("#search-block-form [name='keys']").val()&&t("#search-block-form input[name='keys']").val(o.t("Keywords")),t("#search-block-form input[name='keys']").focus(function(){t(this).val()===o.t("Keywords")&&t(this).val("")}).blur(function(){""===t(this).val()&&t(this).val(o.t("Keywords"))}),t(window).scroll(function(){t(window).scrollTop()>200?t(".btn-btt").show():t(".btn-btt").hide()}).resize(function(){t(window).scrollTop()>200?t(".btn-btt").show():t(".btn-btt").hide()})}}}(jQuery,Drupal);
//# sourceMappingURL=maps/aurgal.js.map