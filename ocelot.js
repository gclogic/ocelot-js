function addListenerToDom(action) {
    $(document).on(action, "[ocelot" + action + "]", function () {
        callOcelotAction($(this), $(this).attr("ocelot" + action));
    });
}

function callOcelotAction(element, endpoint) {
    var method = getMethodFromEndpoint(endpoint);
    var url = getUrlEndpoint(endpoint);
    if (method === "get") {
        doGet(url);
    }

    if (method === "post") {
        var formName = element.attr("form-name");
        var reset = false;
        if (element.attr("reset")) {
            reset = true;
        }
        doPost(url, formName, reset);
    }
}

function getMethodFromEndpoint(endpoint) {
    var endpointVector = endpoint.split(":");
    return endpointVector[0].toLowerCase();
}

function getUrlEndpoint(endpoint) {
    var endpointVector = endpoint.split(":");
    return endpointVector[1];
}

function doGet(endpoint) {
    $.getJSON(endpoint, function (j) {
        launchAction(j);

    }).done(function (data) {

    }).fail(function (jqXHR) {

    });

}

function doPost(endpoint, idform, reset) {

    var fields = $("#" + idform).find('input, textarea, select');
    var datastring = collectFormData(fields);
    $.ajax({
        type: "POST",
        url: endpoint,
        data: datastring,
        cache: false,
        contentType: false,
        processData: false,
        success: function (j) {
            launchAction(j);
        },
        error: function (jqXHR) {
        }
    });
}


function collectFormData(fields) {
    var formData = new FormData();
    for (var i = 0; i < fields.length; i++) {
        var $item = $(fields[i]);
        var type = $item.attr('type');
        if (type === "file") {
            var files = $item[0].files;
            for (var i2 = 0; i2 < files.length; i2++) {
                formData.append($item.attr('name'), files[i2]);
            }

        } else if (type === "checkbox") {
            if ($item.is(':checked')) {
                formData.append($item.attr('name'), $item.val());
            }

        } else if (type === "hidden" && $item.attr('summernote')) {

            var svalue = $($item.attr('summernote')).summernote('code');
            formData.append($item.attr('name'), svalue);
        } else {
            formData.append($item.attr('name'), $item.val());
        }
    }
    return formData;
}


function launchAction(j) {
    for (var i = 0; i < j.length; i++) {

        if (j[i].eventType === "REPLACE") {
            $("#" + j[i].label).css("display", "none");
            $("#" + j[i].label).html(j[i].value);
            $("#" + j[i].label).fadeIn();
        }

        if (j[i].eventType === "APPEND") {
            $("#" + j[i].label).append(j[i].value);
        }

        if (j[i].eventType === "DELETE") {
            $("#" + j[i].label).html("");
        }

        if (j[i].eventType === "ERROR") {
            $("#" + j[i].label).html("");
            showConfirm = false;
        }
    }
}

$(document).ready(function () {
    addListenerToDom("abort");
    addListenerToDom("afterprint");
    addListenerToDom("animationend");
    addListenerToDom("animationiteration");
    addListenerToDom("animationstart");
    addListenerToDom("beforeprint");
    addListenerToDom("beforeunload");
    addListenerToDom("blur");
    addListenerToDom("canplay");
    addListenerToDom("canplaythrough");
    addListenerToDom("change");
    addListenerToDom("click");
    addListenerToDom("contextmenu");
    addListenerToDom("copy");
    addListenerToDom("cut");
    addListenerToDom("dblclick");
    addListenerToDom("drag");
    addListenerToDom("dragend");
    addListenerToDom("dragenter");
    addListenerToDom("dragleave");
    addListenerToDom("dragover");
    addListenerToDom("dragstart");
    addListenerToDom("drop");
    addListenerToDom("durationchange");
    addListenerToDom("ended");
    addListenerToDom("error");
    addListenerToDom("focus");
    addListenerToDom("focusin");
    addListenerToDom("focusout");
    addListenerToDom("fullscreenchange");
    addListenerToDom("fullscreenerror");
    addListenerToDom("hashchange");
    addListenerToDom("input");
    addListenerToDom("invalid");
    addListenerToDom("keydown");
    addListenerToDom("keypress");
    addListenerToDom("keyup");
    addListenerToDom("load");
    addListenerToDom("loadeddata");
    addListenerToDom("loadedmetadata");
    addListenerToDom("loadstart");
    addListenerToDom("message");
    addListenerToDom("mousedown");
    addListenerToDom("mouseenter");
    addListenerToDom("mouseleave");
    addListenerToDom("mousemove");
    addListenerToDom("mouseover");
    addListenerToDom("mouseout");
    addListenerToDom("mouseup");
    addListenerToDom("mousewheel");
    addListenerToDom("offline");
    addListenerToDom("online");
    addListenerToDom("open");
    addListenerToDom("pagehide");
    addListenerToDom("pageshow");
    addListenerToDom("paste");
    addListenerToDom("pause");
    addListenerToDom("play");
    addListenerToDom("playing");
    addListenerToDom("popstate");
    addListenerToDom("progress");
    addListenerToDom("ratechange");
    addListenerToDom("resize");
    addListenerToDom("reset");
    addListenerToDom("scroll");
    addListenerToDom("search");
    addListenerToDom("seeked");
    addListenerToDom("seeking");
    addListenerToDom("select");
    addListenerToDom("show");
    addListenerToDom("stalled");
    addListenerToDom("storage");
    addListenerToDom("submit");
    addListenerToDom("suspend");
    addListenerToDom("timeupdate");
    addListenerToDom("toggle");
    addListenerToDom("touchcancel");
    addListenerToDom("touchend");
    addListenerToDom("touchmove");
    addListenerToDom("touchstart");
    addListenerToDom("transitionend");
    addListenerToDom("unload");
    addListenerToDom("volumechange");
    addListenerToDom("waiting");
    addListenerToDom("wheel");
    addListenerToDom("altKey");
    addListenerToDom("altKey");
    addListenerToDom("animationName");
    addListenerToDom("bubbles");
    addListenerToDom("button");
    addListenerToDom("buttons");
    addListenerToDom("cancelable");
    addListenerToDom("charCode");
    addListenerToDom("changeTouches");
    addListenerToDom("clientX");
    addListenerToDom("clientY");
    addListenerToDom("clipboardData");
    addListenerToDom("code");
    addListenerToDom("composed");
    addListenerToDom("ctrlKey");
    addListenerToDom("ctrlKey");
    addListenerToDom("currentTarget");
    addListenerToDom("data");
    addListenerToDom("dataTransfer");
    addListenerToDom("defaultPrevented");
    addListenerToDom("deltaX");
    addListenerToDom("deltaY");
    addListenerToDom("deltaZ");
    addListenerToDom("deltaMode");
    addListenerToDom("detail");
    addListenerToDom("elapsedTime");
    addListenerToDom("elapsedTime");
    addListenerToDom("eventPhase");
    addListenerToDom("inputType");
    addListenerToDom("isComposing");
    addListenerToDom("isTrusted");
    addListenerToDom("key");
    addListenerToDom("key");
    addListenerToDom("keyCode");
    addListenerToDom("location");
    addListenerToDom("lengthComputable");
    addListenerToDom("loaded");
    addListenerToDom("metaKey");
    addListenerToDom("metaKey");
    addListenerToDom("MovementX");
    addListenerToDom("MovementY");
    addListenerToDom("newValue");
    addListenerToDom("newURL");
    addListenerToDom("offsetX");
    addListenerToDom("offsetY");
    addListenerToDom("oldValue");
    addListenerToDom("oldURL");
    addListenerToDom("onemptied");
    addListenerToDom("pageX");
    addListenerToDom("pageY");
    addListenerToDom("persisted");
    addListenerToDom("preventDefault()");
    addListenerToDom("propertyName");
    addListenerToDom("pseudoElement");
    addListenerToDom("region");
    addListenerToDom("relatedTarget");
    addListenerToDom("relatedTarget");
    addListenerToDom("repeat");
    addListenerToDom("screenX");
    addListenerToDom("screenY");
    addListenerToDom("shiftKey");
    addListenerToDom("shiftKey");
    addListenerToDom("state");
    addListenerToDom("storageArea");
    addListenerToDom("target");
    addListenerToDom("targetTouches");
    addListenerToDom("timeStamp");
    addListenerToDom("total");
    addListenerToDom("touches");
    addListenerToDom("transitionend");
    addListenerToDom("type");
    addListenerToDom("url");
    addListenerToDom("which");
    addListenerToDom("which");
    addListenerToDom("view");
});