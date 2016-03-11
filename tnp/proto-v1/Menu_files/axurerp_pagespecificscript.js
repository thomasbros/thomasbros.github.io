for(var i = 0; i < 86; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('loggedInVar')) != ('Yes')) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

SetWidgetSelected('u18');
SetWidgetSelected('u32');
}
else
if ((GetGlobalVariableValue('loggedInVar')) == ('Yes')) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

SetWidgetSelected('u32');
SetWidgetSelected('u18');
}

});

function rdo0onHomeClick(e) {

if (true) {

}

}

function rdo0onPlacesClick(e) {

if (true) {

}

}
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u15'] = 'top';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Login.html');

}
});
document.getElementById('u18_img').tabIndex = 0;

u18.style.cursor = 'pointer';
$axure.eventManager.click('u18', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u19'] = 'center';document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ArticleSectionAll.html');

}
});
gv_vAlignTable['u21'] = 'center';document.getElementById('u22_img').tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Places.html');

}
});
gv_vAlignTable['u23'] = 'center';document.getElementById('u24_img').tabIndex = 0;

u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';
$axure.eventManager.click('u34', function(e) {

if (true) {

}
});

$axure.eventManager.click('u34', function(e) {

if (true) {

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u63'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u69'] = 'top';gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u73'] = 'top';gv_vAlignTable['u75'] = 'top';u76.tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Places.html');

}
});
u77.tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ArticleSectionActivities.html');

}
});
u78.tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ArticleSectionWellbeing.html');

}
});
u79.tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ArticleSectionCommunity.html');

}
});
