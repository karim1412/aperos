"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('../../services/hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        // proprerties 
        this.title = 'Tour of heroes';
    }
    // methods
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    // setters
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            // Each time the parsor sees this selector name
            // he will apply all stuff inside this #Component
            selector: 'my-heroes',
            // the angular directives used below are:
            // 	*ngFor : make loop with the element he belongs to
            //		*ngFor = 'let key of keys' 
            // 	*ngIf : make a condition
            //		*ngIf = 'condition' 	
            // the angular event binding used below is
            //	(click) : add an eventListener to element he belongs to
            // 		(click)='function(param)'
            // the angular property binding used below is
            //	(class) : add a class to the element he belongs to
            // 	only if the condition return true
            // 		(class.className)='condition in which case the className will be added'
            template: "\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<ul class='heroes'>\n\t\t\t\t<li *ngFor='let hero of heroes' [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n\t\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n\t\t\t\n\n\t",
            styles: ["\n\t  .selected {\n\t    background-color: #CFD8DC !important;\n\t    color: white;\n\t  }\n\t  .heroes {\n\t    margin: 0 0 2em 0;\n\t    list-style-type: none;\n\t    padding: 0;\n\t    width: 15em;\n\t  }\n\t  .heroes li {\n\t    cursor: pointer;\n\t    position: relative;\n\t    left: 0;\n\t    background-color: #EEE;\n\t    margin: .5em;\n\t    padding: .3em 0;\n\t    height: 1.6em;\n\t    border-radius: 4px;\n\t  }\n\t  .heroes li.selected:hover {\n\t    background-color: #BBD8DC !important;\n\t    color: white;\n\t  }\n\t  .heroes li:hover {\n\t    color: #607D8B;\n\t    background-color: #DDD;\n\t    left: .1em;\n\t  }\n\t  .heroes .text {\n\t    position: relative;\n\t    top: -3px;\n\t  }\n\t  .heroes .badge {\n\t    display: inline-block;\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.8em 0.7em 0 0.7em;\n\t    background-color: #607D8B;\n\t    line-height: 1em;\n\t    position: relative;\n\t    left: -1px;\n\t    top: -4px;\n\t    height: 1.8em;\n\t    margin-right: .8em;\n\t    border-radius: 4px 0 0 4px;\n\t  }\n\t"],
            // tels angular that he have to use this component too
            directives: [hero_detail_component_1.HeroDetailComponent],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map