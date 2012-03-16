var JCSDLGuiTemplates = {
	// editor
	editor : $([
		'<div class="jcsdl-editor">',
			'<h3>Filters:</h3>',
			'<ul class="filters-logic">',
				'<li><input type="radio" name="logic" value="AND" checked="checked" /> ALL of the following:</li>',
				'<li><input type="radio" name="logic" value="OR" /> ANY of the following:</li>',
			'</ul>',
			'<div class="filters-list">',
			'</div>',
			'<input type="button" class="filter-add" value="Add Filter" />',
			'<input type="button" class="jcsdl-editor-save" value="Convert to JCSDL" />',
		'</div>'
	].join('')),

	// filter row
	filter : $([
		'<div class="filter">',
			'<div class="filter-description">',
				'<div class="j-target info"></div>',
				'<div class="j-field info"></div>',
				'<div class="j-operator info"></div>',
				'<div class="j-value info"></div>',
			'</div>',
			'<div class="options">',
				'<a href="#" class="j-edit">Edit</a>',
				'<a href="#" class="j-delete">Delete</a>',
			'</div>',
		'</div>'
	].join('')),

	// step container, all steps should be wrapped with this so it's easy to remove them when necessary
	step : $('<div class="filter-step" />'),

	// target select
	target : $([
		'<div id="filter-target">',
			'<h2>Choose Stream Source:</h2>',
			'<select name="target">',
				'<option disabled="true" selected="selected">Select Data Source...</option>',
			'</select>',
		'</div>'
	].join('')),

	// target select option
	targetOption : $('<option />'),

	// field select
	field : $([
		'<div class="filter-target-field">',
			'<select name="field[]">',
				'<option disabled="true" selected="selected">Select Field...</option>',
			'</select>',
		'</div>'
	].join('')),

	// field select option
	fieldOption : $('<option />'),

	// value input container
	valueInput : $([
		'<div id="filter-value-input">',
			'<div id="filter-value-input-operators"></div>',
			'<div id="filter-value-input-field"></div>',
		'</div>'
	].join('')),

	// text input
	valueInput_text : $([
		'<div class="input-text">',
			'<input type="text" placeholder="Type your desired value" />',
		'</div>'
	].join('')),

	// operator select
	operatorSelect : $([
		'<div class="operator-select">',
			'<input type="radio" name="operator" />',
			'<label />',
		'</div>'
	].join('')),

	// submit button
	submit : $('<input type="button" value="Convert to CSDL" />')
};