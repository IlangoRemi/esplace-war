
				var urlCreator = window.URL || window.webkitURL;
				var imageUrl = urlCreator.createObjectURL(this.response);
				var img = new Image();
				img.onload = () => {
					ctx.drawImage(img, x, y);
					resolve(ctx);
				};
			img.src = imageUrl;
			}
		});
	});
}

function rgbToHex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
