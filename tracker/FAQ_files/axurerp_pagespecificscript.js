for(var i = 0; i < 11; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
u10.tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('MyAccount.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';
u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href='<a href=\"tel:+12125551212\"></a>';

}
});
