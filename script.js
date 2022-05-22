function main() {
	const qrdivClassName = "qrdiv";
	const linkData = "www.play.google.com"

	var QR_CODE = new QRCode("qrcode", {
		width: 150,
		height: 150,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});
	generateQRCode(linkData)

	function generateQRCode(linkData) {
		QR_CODE.clear();
		QR_CODE.makeCode(linkData);
		// Show QRCode div
		qrdiv.className = qrdivClassName;
	}
}

main();
