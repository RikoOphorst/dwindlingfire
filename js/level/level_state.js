require("js/level/level");

var LevelState = function()
{
	this.name = "Level";
	this._camera = Camera.new("orthographic");

	this.initialise = function()
	{
		ContentManager.load("box", "boxes/level.box");
		ContentManager.loadFont("fonts/test.ttf", 12);
		ContentManager.loadFont("fonts/test.ttf", 16);
		ContentManager.loadFont("fonts/test.ttf", 24);
		this._level = new Level();
	}

	this.update = function(dt)
	{
		this._level.update(dt);
	}

	this.draw = function(dt)
	{
		Game.render(this._camera);
	}

	this.reload = function(path)
	{
		this._level = new Level();
	}

	this.destroy = function()
	{
		ContentManager.unload("box", "boxes/level.box")
	}
}