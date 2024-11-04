const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard
	];
};
self.C3_JsPropNameTable = [
	{Player: 0},
	{chao: 0},
	{Teclado: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}