function lets_form_captcha() {
	if (0 !== grecaptcha.getResponse(googleCaptchas.lets_form_captcha).length) return $("#lets_form_captcha").siblings(".error").remove(), !0
}

function message_form_captcha() {
	if (0 !== grecaptcha.getResponse(googleCaptchas.message_form_captcha).length) return $("#message_form_captcha").siblings(".error").remove(), !0
}

function solution_form_captcha() {
	if (0 !== grecaptcha.getResponse(googleCaptchas.solution_form_captcha).length) return $("#solution_form_captcha").siblings(".error").remove(), !0
}
$(document).ready(function () {
	function e(e) {
		$(e).find(".loader-box").show()
	}

	function i(e) {
		$(e).find(".loader-box").hide()
	}
	$(":input").keyup(function (e) {
		$(this).siblings(".error").length > 0 && $(this).siblings(".error").remove()
	}), $("#interested").length > 0 && $("#interested,#budget").change(function (e) {
		$(this).siblings(".error").length > 0 && $(this).siblings(".error").remove()
	}), 
	$(".formSubmit").click(function (r) {
	  
		$(this);
		var t = $(this).closest("form");
		t.find("[name='form_title']");

		var a = $(t).find("#mobile").val().trim();

		function n() {
			var e = !0;
			return ["Lets_Form"].indexOf("Lets_Form") >= 0 && (e = !1), e
		}
		r.preventDefault();
		var s = !0;"" == $(t).find("#name").val().trim() && (0 == $(t).find("#name").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#name")), $(t).find("#name").focus(), s = !1);
		var o = $(t).find("#email").val().trim();
		("" == o && (0 == $(t).find("#email").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#email")), $(t).find("#email").focus(), s = !1), "" != o) && (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o) || (0 == $(t).find("#email").siblings(".error").length && $("<div class='error'>Please enter valid email.</div>").insertAfter($(t).find("#email")), $(t).find("#email").focus(), s = !1));
		var a = $(t).find("#mobile").val().trim();
		if ("" == a && (0 == $(t).find("#mobile").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#mobile")), $(t).find("#mobile").focus(), s = !1), "" != a ) {
			/^\d*$/.test(a) || (0 == $(t).find("#mobile").siblings(".error").length && $("<div class='error'>Please enter only numeric value.</div>").insertAfter($(t).find("#mobile")), $(t).find("#mobile").focus(), s = !1)
		}
		if ($(t).find("#org_name").length > 0 && null == $(t).find("#org_name").val().trim() && n() && (0 == $(t).find("#org_name").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#org_name")), $(t).find("#org_name").focus(), s = !1), $(t).find("#interested").length > 0 && null == $(t).find("#interested").val() && (0 == $(t).find("#interested").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#interested")), $(t).find("#interested").focus(), s = !1), $(t).find("#budget").length > 0 && null == $(t).find("#budget").val() && n() && (0 == $(t).find("#budget").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#budget")), $(t).find("#budget").focus(), s = !1), $(t).find("#skype_whatsapp").length > 0 && "" == $(t).find("#skype_whatsapp").val().trim() && n() && (0 == $(t).find("#skype_whatsapp").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#skype_whatsapp")), $(t).find("#skype_whatsapp").focus(), s = !1), "" == $(t).find("#message").val().trim() && n() && (0 == $(t).find("#message").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#message")), $(t).find("#message").focus(), s = !1), $(t).find("#city").length > 0 && "" == $(t).find("#city").val().trim() && n() && (0 == $(t).find("#city").siblings(".error").length && $("<div class='error'>This field is required.</div>").insertAfter($(t).find("#city")), $(t).find("#city").focus(), s = !1), $(t).find("input[name=form_title]").length > 0) {
			var l = $(t).find("input[name=form_title]").val().toLocaleLowerCase();
			if (0 === grecaptcha.getResponse(googleCaptchas[l + "_captcha"]).length) return 0 == $(t).find(".captcha .error").length && $(t).find(".captcha").append('<div class="error">Please check captcha.</div>'), !1
		}
		if (s) {
			var f = $(t).serialize();
			$.ajax({
				type: "POST",
				url: "dev_mail.php",
				data: f,
				dataType: "json",
				error: function (r) {
					e(t), i(t)
				},
				beforeSend: function () {
					e(t)
				},
				success: function (e) {
					if (i(t), 1 == e.success) {
						"undefined" != typeof grecaptcha && grecaptcha.reset(), $(t)[0].reset(), $(t).find("#responseMsg").addClass("success").html(e.msg).show();
						var r, n = $("input[name=form_title]").val();
						if ("Lets_Form" == n || "Solution_Form" == n) "Lets_Form" == n ? r = "#solution-form" : "Solution_Form" == n && (r = ".righ-form-sec"), $("html, body").animate({
							scrollTop: $(r).offset().top
						}, 1e3);
						setTimeout(function () {
							window.location.href = window.location.origin + "/thank-you.html"
						}, 100)
					} else 0 == e.success && ($(t).find("#responseMsg").removeClass("success").addClass("error").html(e.msg).show(), setTimeout(function () {}, 1e4))
				}
			})
		}
		return !1
	})
});
var googleCaptchas = {};

function captchaCallback() {
	var e, i;
	$("div.captcha-google").each(function () {
		e = $(this).attr("id"), i = grecaptcha.render(e, {
			sitekey: "6LeiVQATAAAAAEL74lgJ10p6d0EhSoG63FscYLLg",
			callback: e
		}), googleCaptchas[e] = i
	})
}

function setCookie(e, i, r) {
	var t = "";
	if (r) {
		var n = new Date;
		n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3), t = "; expires=" + n.toUTCString()
	}
	document.cookie = e + "=" + (i || "") + t + "; path=/"
}

function getCookie(e) {
	for (var i = e + "=", r = document.cookie.split(";"), t = 0; t < r.length; t++) {
		for (var n = r[t];
			" " == n.charAt(0);) n = n.substring(1, n.length);
		if (0 == n.indexOf(i)) return n.substring(i.length, n.length)
	}
	return null
}

function eraseCookie(e) {
	document.cookie = e + "=; Max-Age=-99999999;"
}
document.referrer && 0 == /www.wedigtech.com/i.test(document.referrer) && setCookie("RefererValue", document.referrer, 1);