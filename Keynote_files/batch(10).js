try {
AJS.Confluence.SharePage={};
AJS.Confluence.SharePage.autocompleteUser=function(C){C=C||document.body;
var D=AJS.$,A=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;
var B=function(F){if(!F||!F.result){throw new Error("Invalid JSON format")
}var E=[];
E.push(F.result);
return E
};
D("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",C).each(function(){var G=D(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");
var F=G.attr("data-max")||10,I=G.attr("data-alignment")||"left",H=G.attr("data-dropdown-target"),E=null;
if(H){E=D(H)
}else{E=D("<div></div>");
G.after(E)
}E.addClass("aui-dd-parent autocomplete");
G.quicksearch(AJS.REST.getBaseUrl()+"search/user.json",function(){G.trigger("open.autocomplete-sharepage")
},{makeParams:function(J){return{"max-results":F,query:J.replace("{|}","")}
},dropdownPlacement:function(J){E.append(J)
},makeRestMatrixFromData:B,addDropdownData:function(K){var J=D.trim(G.val());
if(A.test(J)){K.push([{name:J,email:J,href:"#",icon:AJS.Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])
}if(!K.length){var L=G.attr("data-none-message");
if(L){K.push([{name:L,className:"no-results",href:"#"}])
}}return K
},ajsDropDownOptions:{alignment:I,displayHandler:function(J){if(J.restObj&&J.restObj.username){return J.name+" ("+J.restObj.username+")"
}return J.name
},selectionHandler:function(L,K){if(K.find(".search-for").length){G.trigger("selected.autocomplete-sharepage",{searchFor:G.val()});
return 
}if(K.find(".no-results").length){this.hide();
L.preventDefault();
return 
}var J=D("span:eq(0)",K).data("properties");
if(!J.email){J=J.restObj
}G.trigger("selected.autocomplete-sharepage",{content:J});
this.hide();
L.preventDefault()
}}})
})
};
(function(A){jQuery.fn.extend({elastic:function(){var B=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];
return this.each(function(){if(this.type!=="textarea"){return false
}var G=jQuery(this),C=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),I=parseInt(G.css("line-height"),10)||parseInt(G.css("font-size"),"10"),K=parseInt(G.css("height"),10)||I*3,J=parseInt(G.css("max-height"),10)||Number.MAX_VALUE,D=0;
if(J<0){J=Number.MAX_VALUE
}C.appendTo(G.parent());
var F=B.length;
while(F--){C.css(B[F].toString(),G.css(B[F].toString()))
}function H(){var M=Math.floor(parseInt(G.width(),10));
if(C.width()!==M){C.css({width:M+"px"});
E(true)
}}function L(M,O){var N=Math.floor(parseInt(M,10));
if(G.height()!==N){G.css({height:N+"px",overflow:O})
}}function E(P){var O=G.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");
var M=C.html().replace(/<br>/ig,"<br />");
if(P||O+"&nbsp;"!==M){C.html(O+"&nbsp;");
if(Math.abs(C.height()+I-G.height())>3){var N=C.height()+I;
if(N>=J){L(J,"auto")
}else{if(N<=K){L(K,"hidden")
}else{L(N,"hidden")
}}}}}G.css({overflow:"hidden"});
G.bind("keyup change cut paste",function(){E()
});
A(window).bind("resize",H);
G.bind("resize",H);
G.bind("update",E);
G.bind("input paste",function(M){setTimeout(E,250)
});
E()
})
}})
})(AJS.$);
(function(E){var D,B={hideCallback:A,width:250,hideDelay:3600000,calculatePositions:function(G,N,V,R){var O;
var X;
var T;
var K=-7;
var L;
var P;
var W=N.target.offset();
var F=N.target.outerWidth();
var I=W.left+F/2;
var S=(window.pageYOffset||document.documentElement.scrollTop)+E(window).height();
var J=10;
T=W.top+N.target.outerHeight()+R.offsetY;
O=W.left+R.offsetX;
var M=W.top>G.height();
var H=(T+G.height())<S;
P=(!H&&M)||(R.onTop&&M);
var Q=E(window).width()-(O+R.width+J);
if(P){T=W.top-G.height()-8;
var U=R.displayShadow?(AJS.$.browser.msie?10:9):0;
K=G.height()-U
}L=I-O+R.arrowOffsetX;
if(R.isRelativeToMouse){if(Q<0){X=J;
O="auto";
L=V.x-(E(window).width()-R.width)
}else{O=V.x-20;
X="auto";
L=V.x-O
}}else{if(Q<0){X=J;
O="auto";
L=I-(E(window).width()-G.outerWidth())
}else{if(R.width<=F/2){L=R.width/2;
O=I-R.width/2
}}}return{displayAbove:P,popupCss:{left:O,right:X,top:T},arrowCss:{position:"absolute",left:L,right:"auto",top:K}}
}};
var A=function(){E(".dashboard-actions .explanation").hide()
};
var C=function(I,G,H){if(I.find("input").length){H();
return 
}I.append(AJS.template.load("share-content-popup").fill());
AJS.Confluence.SharePage.autocompleteUser();
var J=function(L){D.hide();
if(L){setTimeout(function(){I.empty()
},300)
}return false
};
E(document).keyup(function(L){if(L.keyCode==27){J(true);
E(document).unbind("keyup",arguments.callee);
return false
}return true
});
I.find(".close-dialog").click(function(){J(true)
});
I.find("#note").elastic();
I.find("form").submit(function(){var P=[];
I.find(".recipients li").each(function(Q,R){P.push(E(R).attr("data-username"))
});
if(P.length<=0){return false
}E("button,input,textarea",this).attr("disabled","disabled");
I.find(".progress-messages-icon").removeClass("error");
I.find(".progress-messages").text("Sending");
I.find(".progress-messages").attr("title","Sending");
var M=Raphael.spinner(I.find(".progress-messages-icon")[0],7,"#666");
I.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");
I.find(".progress-messages").css("padding-left",I.find(".progress-messages-icon").innerWidth()+5);
var P=[];
I.find(".recipients li[data-username]").each(function(Q,R){P.push(E(R).attr("data-username"))
});
var O=[];
I.find(".recipients li[data-email]").each(function(Q,R){O.push(E(R).attr("data-email"))
});
var L=I.find("#note");
var N={users:P,emails:O,note:L.hasClass("placeholded")?"":L.val(),entityId:AJS.params.pageId};
E.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(N),dataType:"text",success:function(){setTimeout(function(){M();
I.find(".progress-messages-icon").css("width","16px");
I.find(".progress-messages-icon").css("height","16px");
I.find(".progress-messages-icon").addClass("done");
I.find(".progress-messages").text("Sent");
I.find(".progress-messages").attr("title","Sent");
setTimeout(function(){J(true)
},1000)
},500)
},error:function(R,Q){M();
I.find(".progress-messages-icon").css("width","16px");
I.find(".progress-messages-icon").css("height","16px");
I.find(".progress-messages-icon").addClass("error");
I.find(".progress-messages").text("Error while sending");
I.find(".progress-messages").attr("title","Error while sending");
E("button,input,textarea",I).removeAttr("disabled")
}});
return false
});
var K=I.find("#users");
var F=I.find("input.submit");
K.bind("selected.autocomplete-sharepage",function(M,L){var N=function(P,Q){var S=I.find(".recipients"),R,O;
R="li[data-"+P+'="'+Q.content[P]+'"]';
if(S.find(R).length>0){S.find(R).hide()
}else{S.append(AJS.template.load("share-content-popup-recipient-"+P).fill(Q.content))
}O=S.find(R);
O.find(".remove-recipient").click(function(){O.remove();
if(S.find("li").length==0){F.attr("disabled","true")
}D.refresh();
K.focus();
return false
});
O.fadeIn(200)
};
if(L.content.email){N("email",L)
}else{N("username",L)
}D.refresh();
F.removeAttr("disabled");
K.val("");
return false
});
K.bind("open.autocomplete-sharepage",function(M,L){if(E("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()
}});
K.keypress(function(L){if(L.keyCode==13){return false
}return true
});
E(document).bind("showLayer",function(N,M,L){if(M=="inlineDialog"&&L.popup==D){L.popup.find("#users").focus()
}});
E("#shareContentLink").parents().filter(function(){return this.scrollTop>0
}).scrollTop(0);
H()
};
AJS.toInit(function(F){D=AJS.InlineDialog(F("#shareContentLink"),"shareContentPopup",C,B)
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(A){if(A("#action-view-storage-link").length){A("#action-source-editor-view-storage-link").closest("li").hide()
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){A.extend({progressBar:new function(){this.defaults={steps:20,stepDuration:20,max:100,showText:true,textFormat:"percentage",width:120,height:12,callback:null,boxImage:"images/progressbar.gif",barImage:{0:"images/progressbg_red.gif",30:"images/progressbg_orange.gif",70:"images/progressbg_green.gif"},running_value:0,value:0,image:null};
this.construct=function(C,B){var D=null;
var E=null;
if(C!=null){if(!isNaN(C)){D=C;
if(B!=null){E=B
}}else{E=C
}}return this.each(function(F){var O=this;
var H=this.config;
if(D!=null&&this.bar!=null&&this.config!=null){this.config.value=parseInt(D);
if(E!=null){O.config=A.extend(this.config,E)
}H=O.config
}else{var M=A(this);
var H=A.extend({},A.progressBar.defaults,E);
H.id=M.attr("id")?M.attr("id"):Math.ceil(Math.random()*100000);
if(D==null){D=M.html().replace("%","")
}H.value=parseInt(D);
H.running_value=0;
H.image=L(H);
var P=["steps","stepDuration","max","width","height","running_value","value"];
for(var I=0;
I<P.length;
I++){H[P[I]]=parseInt(H[P[I]])
}M.html("");
var K=document.createElement("img");
var R=document.createElement("span");
var G=A(K);
var N=A(R);
O.bar=G;
G.attr("id",H.id+"_pbImage");
N.attr("id",H.id+"_pbText");
N.html(Q(H));
G.attr("title",Q(H));
G.attr("alt",Q(H));
G.attr("src",H.boxImage);
G.attr("width",H.width);
G.css("width",H.width+"px");
G.css("height",H.height+"px");
G.css("background-image","url("+H.image+")");
G.css("background-position",((H.width*-1))+"px 50%");
G.css("padding","0");
G.css("margin","0");
M.append(G);
M.append(N)
}function J(T){return T.running_value*100/T.max
}function L(T){var V=T.barImage;
if(typeof (T.barImage)=="object"){for(var U in T.barImage){if(T.running_value>=parseInt(U)){V=T.barImage[U]
}else{break
}}}return V
}function Q(T){if(T.showText){if(T.textFormat=="percentage"){return" "+Math.round(T.running_value)+"%"
}else{if(T.textFormat=="fraction"){return" "+T.running_value+"/"+T.max
}}}}H.increment=Math.round((H.value-H.running_value)/H.steps);
if(H.increment<0){H.increment*=-1
}if(H.increment<1){H.increment=1
}var S=setInterval(function(){var W=H.width/100;
if(H.running_value>H.value){if(H.running_value-H.increment<H.value){H.running_value=H.value
}else{H.running_value-=H.increment
}}else{if(H.running_value<H.value){if(H.running_value+H.increment>H.value){H.running_value=H.value
}else{H.running_value+=H.increment
}}}if(H.running_value==H.value){clearInterval(S)
}var V=A("#"+H.id+"_pbImage");
var T=A("#"+H.id+"_pbText");
var U=L(H);
if(U!=H.image){V.css("background-image","url("+U+")");
H.image=U
}V.css("background-position",(((H.width*-1))+(J(H)*W))+"px 50%");
V.attr("title",Q(H));
T.html(Q(H));
if(H.callback!=null&&typeof (H.callback)=="function"){H.callback(H)
}O.config=H
},H.stepDuration)
})
}
}});
A.fn.extend({progressBar:A.progressBar.construct})
})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){Confluence.Plugins=Confluence.Plugins||{};
Confluence.Plugins.Publisher={};
Confluence.Plugins.Publisher.DraftManager=function(){};
Confluence.Plugins.Publisher.DraftManager.prototype.create=function(C,B){return A.ajax({type:"POST",contentType:"application/json",url:AJS.Confluence.getContextPath()+"/rest/publisher/latest/draft/create",data:A.toJSON({originalId:C,title:B})})
};
Confluence.Plugins.Publisher.DraftManager.prototype.publish=function(B,C){return A.ajax({type:"POST",contentType:"application/json",url:AJS.Confluence.getContextPath()+"/rest/publisher/latest/draft/publish",data:A.toJSON({id:B,comment:C})})
};
Confluence.Plugins.Publisher.DraftManager.prototype.get=function(B){return A.ajax({type:"GET",url:AJS.Confluence.getContextPath()+"/rest/publisher/latest/draft/drafts",data:{draftPageIds:B}})
};
Confluence.Plugins.Publisher.CreateDraftDialog=function(B){var C=this;
this.dialog=new AJS.Dialog(400,180);
this.draftManager=B;
this.dialog.addHeader("Create Draft").addPanel("Panel 1","panel1").addSubmit("Create",function(){createDraft(C);
return false
}).addCancel("Cancel",function(){C.dialog.hide()
});
this.dialog.getCurrentPanel().html(AJS.renderTemplate("create-draft"));
A("form.create-draft-dialog").submit(function(){createDraft(C);
return false
})
};
Confluence.Plugins.Publisher.CreateDraftDialog.prototype.open=function(){this.dialog.show();
A("form.create-draft-dialog input")[0].value="DRAFT - "+AJS.params.pageTitle
};
createDraft=function(C){var B=C.draftManager;
var E=C.dialog;
var D=A("form.create-draft-dialog input")[0].value;
var F=AJS.params.pageId;
B.create(F,D).success(function(G){E.remove();
window.location=AJS.params.contextPath+G
}).error(function(G){alert(G.responseText)
})
};
Confluence.Plugins.Publisher.PublishingDialog=function(C,B){var D=this;
this.draftManager=B;
this.pagesToPublish=C;
this.dialog=new AJS.Dialog(600,480,"publisher-dialog");
this.dialog.addHeader("Publish").addPanel("Panel 1","panel1").addSubmit("Publish",function(){publish(D)
}).addCancel("Cancel",function(){D.dialog.remove()
}).addPage("publisher-progress").addHeader("Publish").addPanel("Panel 2","panel2").addSubmit("Done",function(){D.dialog.remove();
window.location.reload()
});
this.dialog.getPanel(0,0).html(AJS.renderTemplate("publisher-dialog-page1"));
this.dialog.getPanel(1,0).html(AJS.renderTemplate("publisher-dialog-page2"));
this.dialog.gotoPage(0);
A("form.publish-comment-form").submit(function(){publish(D);
return false
});
AJS.bind("show.dialog",function(F,E){if(E.dialog.id=="publisher-dialog"){B.get(C).done(function(G){for(i in G){A(".publisher-dialog-pages table").append(AJS.renderTemplate("publisher-dialog-page",G[i].title,AJS.Confluence.getContextPath()+G[i].url))
}}).fail(function(){alert(E.responseText)
});
AJS.unbind("show.dialog",F.handler)
}})
};
Confluence.Plugins.Publisher.PublishingDialog.prototype.open=function(){this.dialog.show()
};
publishNextPage=function(E,B,F,C){var D=E.pagesToPublish;
A(".publisher-dialog-progress-message").text("Publishing "+(B+1)+" of "+D.length);
E.draftManager.publish(D[B],F).done(function(K){var J="";
var I="";
var H="";
if(K.draft.currentOriginalVersion>K.draft.originalVersionAtDraftCreation){I=AJS.params.contextPath+AJS.format("/pages/diffpagesbyversion.action?pageId={0}&selectedPageVersions={1}&selectedPageVersions={2}",K.draft.originalId,K.draft.currentOriginalVersion,K.draft.originalVersionAtDraftCreation);
H="view changes"
}else{J="No changes"
}A(".publisher-dialog-pages-progress table").append(AJS.renderTemplate("publisher-dialog-page-progress",K.title,AJS.params.contextPath+K.url,J,I,H));
var G=B+1;
if(D.length>G){publishNextPage(E,G,F,C)
}else{A(".publisher-dialog-progress-message").text("Successfully published "+D.length+" pages.");
A(".publisher-dialog-progress-icon").addClass("done");
C();
A("#publisher-dialog .button-panel-submit-button").enable();
A("#publisher-dialog .button-panel-submit-button").focus()
}}).fail(function(G){alert(G.responseText)
})
};
publish=function(D){var C=D.dialog;
var E=A("#publish-comment").val();
A("#publish-comment").blur();
C.nextPage();
A("#publisher-dialog .button-panel-submit-button").disable();
var B=Raphael.spinner(A(".publisher-dialog-progress-icon")[0],7,"#666");
publishNextPage(D,0,E,B)
};
AJS.toInit(function(C){var B=new Confluence.Plugins.Publisher.DraftManager();
AJS.I18n.get("com.atlassian.confluence.plugins.confluence-publisher-plugin");
C("#createdraftlink").click(function(D){new Confluence.Plugins.Publisher.CreateDraftDialog(B).open();
return D.preventDefault()
});
C("#publish-button").click(function(F){var E=new Array();
C(".draft-publishing input[name=pageId]").each(function(){if(this.checked){E.push(this.value)
}});
var D=new Confluence.Plugins.Publisher.PublishingDialog(E,B).open();
return F.preventDefault()
});
C(".draft-publishing input[name=pageId]").change(function(){if(C(".draft-publishing input[name=pageId]:checked").length==0){C("#publish-button").disable()
}else{C("#publish-button").enable()
}});
C(".draft-publishing .select-all").click(function(){if(C(".draft-publishing .select-all:checked").length==0){C(".draft-publishing input[name=pageId]").prop("checked",false)
}else{C(".draft-publishing input[name=pageId]").prop("checked",true)
}})
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function ($) {
    $("#action-view-source-link").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function ($) {
    $(".view-storage-link, .view-storage-link a").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function($) {
    function autoSize(embeds, attempt) {
        var retry;

        if(attempt >= 20) { // 2 sec
            AJS.log('unable to auto size flash - took too long to load');
            return;
        }

        retry = $([]);

        embeds.each(function() {
            var $e = $(this);
            var h, w;
            if(this.GetVariable) {
                // Only set width/height is not already set
                if(!$e.attr("height")) {
                    h = this.GetVariable("height");
                    if(h) {
                        $e.height(h);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
                if(!$e.attr("width")) {
                    w = this.GetVariable("width");
                    if(w) {
                        $e.width(w);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
            }
        });

        if(retry.length) {
            setTimeout(function() {
                autoSize(retry, attempt + 1);
            }, 100);
        }
    }

    autoSize($('embed[type="application/x-shockwave-flash"]'), 0);

    // For preview
    $(window).bind("render-content-loaded", function(e, body) {
        autoSize($('embed[type="application/x-shockwave-flash"]', body), 0);
    });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


