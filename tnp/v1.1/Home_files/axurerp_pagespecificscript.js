﻿for(var i = 0; i < 63; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('loggedInVar')) != ('Yes')) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

SetWidgetSelected('u24');
SetWidgetSelected('u26');
}
else
if ((GetGlobalVariableValue('loggedInVar')) == ('Yes')) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

SetWidgetSelected('u24');
SetWidgetSelected('u26');
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
gv_vAlignTable['u52'] = 'top';document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Places.html');

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u58'] = 'center';document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ArticleSection.html');

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

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u33'] = 'center';
$axure.eventManager.click('u34', function(e) {

if (true) {

}
});

$axure.eventManager.click('u34', function(e) {

if (true) {

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u41'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u43'] = 'top';document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join.html');

}
});
document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('ArticleSection.html');

}
});
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u12'] = 'top';document.getElementById('u13_img').tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Menu.html');

}
});
gv_vAlignTable['u19'] = 'center';