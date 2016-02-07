for(var i = 0; i < 36; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetSelected('u29');
SetWidgetSelected('u21');
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
gv_vAlignTable['u20'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u22'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Places.html');

}
});
gv_vAlignTable['u24'] = 'center';document.getElementById('u25_img').tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u34'] = 'center';
$axure.eventManager.click('u35', function(e) {

if (true) {

}
});

$axure.eventManager.click('u35', function(e) {

if (true) {

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u13'] = 'top';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Join.html');

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u16'] = 'top';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Login.html');

}
});
document.getElementById('u19_img').tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Menu.html');

}
});
