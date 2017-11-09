webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__servicios_archivosjugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivosjugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__componentes_que_ves_que_ves_component__ = __webpack_require__("../../../../../src/app/componentes/que-ves/que-ves.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_31__componentes_que_ves_que_ves_component__["a" /* QueVesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_20__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatToolbarModule */],
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo)
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_smart_table__["a" /* Ng2SmartTableModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCheckboxModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_22__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_12__servicios_jugadores_service__["a" /* JugadoresService */], __WEBPACK_IMPORTED_MODULE_13__servicios_archivosjugadores_service__["a" /* ArchivosjugadoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Juego adivina el Numero
 * la amquina genera un numero secreto ramdom entre 0 y 100.
 * El jugador debe adivinar el numero.
 * la maquina le informa si el numero ingresado es mayor o menor al numero secreto.
 */
var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        return _super.call(this, "Agilidad mental", gano, jugador) || this;
    }
    JuegoAgilidad.prototype.generarOperacion = function () {
        this.primer = this.numeroAleatorio(1, 10);
        this.segundo = this.numeroAleatorio(1, 10);
        var aleatorio = this.numeroAleatorio(1, 2);
        switch (aleatorio) {
            case 1:
                this.operador = '+';
                this.resultado = this.primer + this.segundo;
                break;
            case 2:
                this.operador = '-';
                this.resultado = this.primer - this.segundo;
                break;
        }
    };
    JuegoAgilidad.prototype.numeroAleatorio = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    JuegoAgilidad.prototype.verificar = function () {
        if (this.numeroIngresado == this.resultado)
            this.gano = true;
        else
            this.gano = false;
        return this.gano;
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, " Anagrama ", gano, jugador) || this;
        _this.palabraOrdenada = "";
        _this.palabraDesordenada = "";
        _this.palabraIngresada = "";
        _this.arrayDePalabras = [
            { ordenada: "pantalla", desordenada: "platanal" },
            { ordenada: "mouse", desordenada: "museo" },
            { ordenada: "clase", desordenada: "alces" },
            { ordenada: "estilos", desordenada: "islotes" },
            { ordenada: "materias", desordenada: "maestria" },
            { ordenada: "asignatura", desordenada: "angustiara" },
            { ordenada: "sistema", desordenada: "mesitas" },
            { ordenada: "tecnico", desordenada: "coticen" },
            { ordenada: "pendrive", desordenada: "prevenid" },
            { ordenada: "lapicera", desordenada: "paralice" },
            { ordenada: "cuaderno", desordenada: "educaron" }
        ];
        return _this;
    }
    JuegoAnagrama.prototype.asignarPalabra = function () {
        var indice;
        indice = Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada = this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada = this.arrayDePalabras[indice]["ordenada"];
    };
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabraIngresada == this.palabraOrdenada) {
            this.gano = true;
            this.palabraOrdenada = "";
            this.palabraDesordenada = "";
            this.palabraIngresada = "";
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoPiedraPapelTijera = (function (_super) {
    __extends(JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador) {
        var _this = _super.call(this, "Piedra Papel o Tijera", gano, jugador) || this;
        _this.ContadorDeEmpates = 0;
        _this.ContadorDeGanadas = 0;
        _this.ContadorDePerdidas = 0;
        _this.numeroSecreto = null;
        _this.comenzar();
        return _this;
    }
    JuegoPiedraPapelTijera.prototype.comenzar = function () {
        this.numeroSecreto = Math.floor(Math.random() * 3) + 1; //RANDOM entre 1 y 3
        // alert(this.numeroSecreto+ ' secreto'); 
        switch (this.numeroSecreto) {
            case 1:
                // alert(this.numeroSecreto);
                this.eleccionMaquina = 'piedra';
                break;
            case 2:
                this.eleccionMaquina = 'papel';
                break;
            case 3:
                this.eleccionMaquina = 'tijera';
                break;
        }
    }; //end funcion comenzar
    JuegoPiedraPapelTijera.prototype.piedra = function () {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "piedra ";
        if (this.eleccionHumano == this.eleccionMaquina) {
            this.mensaje = " Empate. ";
            this.ContadorDeEmpates++;
        }
        else if (this.eleccionMaquina == "tijera") {
            this.mensaje = " Ganaste! ";
            this.ContadorDeGanadas++;
        }
        else {
            this.mensaje = " Oops... Ganó la Máquina! ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }; //end funcion piedra
    JuegoPiedraPapelTijera.prototype.papel = function () {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "papel";
        if (this.eleccionHumano == this.eleccionMaquina) {
            this.mensaje = " Empate.";
            this.ContadorDeEmpates++;
        }
        else if (this.eleccionMaquina == "piedra") {
            this.mensaje = " Ganaste.";
            this.ContadorDeGanadas++;
        }
        else {
            this.mensaje = " Oops... Ganó la Máquina.";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }; //end funcion  papel
    JuegoPiedraPapelTijera.prototype.tijera = function () {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "tijera";
        if (this.eleccionHumano == this.eleccionMaquina) {
            this.mensaje = " Empate.";
            this.ContadorDeEmpates++;
        }
        else if (this.eleccionMaquina == "papel") {
            this.mensaje = " Ganaste. ";
            this.ContadorDeGanadas++;
        }
        else {
            this.mensaje = " Oops... Ganó la Máquina. ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }; //end funcion tijera
    JuegoPiedraPapelTijera.prototype.mostarResultado = function () {
        return this.mensajeResultado = 'Ganados: ' + this.ContadorDeGanadas + ' \nPerdidos:' + this.ContadorDePerdidas +
            ' Empatados: ' + this.ContadorDeEmpates;
    };
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        if (this.gano) {
            alert("gano");
            return true;
        }
        else {
            alert("perdió");
            return false;
        }
    };
    JuegoPiedraPapelTijera.prototype.resetear = function () {
        this.eleccionMaquina = "";
        this.eleccionHumano = "";
        this.ContadorDeEmpates = 0;
        this.ContadorDeGanadas = 0;
        this.ContadorDePerdidas = 0;
        this.numeroSecreto = null;
        this.mensaje = "";
        this.msjEleccionMaquina = "";
        this.mensajeResultado = "";
    };
    return JuegoPiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-que-ves.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoQueVes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoQueVes = (function (_super) {
    __extends(JuegoQueVes, _super);
    function JuegoQueVes(nombre, gano, jugador) {
        return _super.call(this, " ¿Qué ves? ", gano, jugador) || this;
    }
    JuegoQueVes.prototype.comenzar = function () {
        this.numImagen = Math.floor(Math.random() * 18) + 1;
        //alert(this.numImagen);
        switch (this.numImagen) {
            case 1:
                this.nombreImagen = '1';
                this.respCorrecta = "alfajor";
                break;
            case 2:
                this.nombreImagen = '2';
                this.respCorrecta = "barco";
                break;
            case 3:
                this.nombreImagen = '3';
                this.respCorrecta = "bigama";
                break;
            case 4:
                this.nombreImagen = '4';
                this.respCorrecta = "binocular";
                break;
            case 5:
                this.nombreImagen = '5';
                this.respCorrecta = "casino";
                break;
            case 6:
                this.nombreImagen = '6';
                this.respCorrecta = "desayuno";
                break;
            case 7:
                this.nombreImagen = '7';
                this.respCorrecta = "desconocidos";
                break;
            case 8:
                this.nombreImagen = '8';
                this.respCorrecta = "festeja";
                break;
            case 9:
                this.nombreImagen = '9';
                this.respCorrecta = "gobierno";
                break;
            case 10:
                this.nombreImagen = '10';
                this.respCorrecta = "matilde";
                break;
            case 11:
                this.nombreImagen = '11';
                this.respCorrecta = "molestar";
                break;
            case 12:
                this.nombreImagen = '12';
                this.respCorrecta = "nocivo";
                break;
            case 13:
                this.nombreImagen = '13';
                this.respCorrecta = "parecidos";
                break;
            case 14:
                this.nombreImagen = '14';
                this.respCorrecta = "secuestrados";
                break;
            case 15:
                this.nombreImagen = '15';
                this.respCorrecta = "sobrevivir";
                break;
            case 16:
                this.nombreImagen = '16';
                this.respCorrecta = "sobrevolar";
                break;
            case 17:
                this.nombreImagen = '17';
                this.respCorrecta = "sobrevuela";
                break;
            case 18:
                this.nombreImagen = '18';
                this.respCorrecta = "tripas";
                break;
        }
        this.imgMostrar = this.nombreImagen;
        this.respuesta = this.respCorrecta;
        //this.jugar();
    };
    JuegoQueVes.prototype.mostrarJugada = function () {
        alert(this.imgMostrar + " " + this.respCorrecta);
        return this.imgMostrar;
    };
    JuegoQueVes.prototype.verificar = function () {
        //alert(" tu resp " +this.respuestaIngresada + " la correct " +this.respuesta);
        if (this.respuestaIngresada == this.respuesta) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoQueVes;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-que-ves.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        this.user = JSON.parse(localStorage.getItem("usuario"));
        if (nombre)
            this.nombre = nombre;
        if (this.user == null) {
            this.jugador = "Invitado@admin.com";
        }
        else {
            this.jugador = this.user.email;
        }
        if (gano)
            this.gano = gano;
        // if(jugador)
        // this.jugador=this.user.email;
        // else
        //   this.jugador= "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #2196F3;\r\n    padding: 10px;\r\n    background:#D5D9FA;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 60%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgba(17, 215, 230, 0.973);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(255, 0, 106);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n.example-button-row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n  }\r\n\r\n.fuente{\r\n    font-family: 'Permanent Marker', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">-->\r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-8 text-left\"> \r\n      <link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \r\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n      <div style=\"text-align:center\">\r\n        <h1 class=\"fuente\">\r\n          {{nuevoJuego.nombre}}!\r\n        </h1>\r\n       </div>\r\n      <h2></h2>\r\n      <form name=\"juego\" >\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\"></div>\r\n          <div class=\"col-sm-6\">\r\n                    \r\n         <label><h3>Ingrese número: </h3> </label><br />\r\n         <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" autofocus/>\r\n         <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n      \r\n         <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n      \r\n         <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n  \r\n         <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" >Esperando que ingrese un número</p></h2>\r\n     \r\n         <h3 [hidden]=\"!aux\">Adivinaste el número <i class=\"glyphicon glyphicon-star-empty\"></i></h3>\r\n         <h3 [hidden]=\"aux\">Aún no ganaste </h3>\r\n          </div>\r\n          <div class=\"col-sm-2\" *ngIf=\"nuevoJuego.numeroSecreto!=0\"><br /><br />\r\n              <mat-spinner>.</mat-spinner>\r\n          </div>\r\n        </div> \r\n\r\n      \r\n      \r\n      </form>\r\n      <div id=\"snackbar\">{{Mensajes}}</div> \r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showSpinner = false;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
        this.showSpinner = true;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.aux = true;
            // this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            this.aux = false;
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
            this.showSpinner = false;
        }
        this.enviarJuego.emit(this.nuevoJuego);
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.Limpiar();
    };
    AdivinaElNumeroComponent.prototype.Limpiar = function () {
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n<h1> listado </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaMasListadoComponent);

//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    border: 10px solid #2196F3;\r\n    padding: 10px;\r\n    background:#D5D9FA;\r\n}\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgba(17, 215, 230, 0.973);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(255, 0, 106);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n\r\n.fuente{\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content \">\r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-8 text-left\">\r\n      \r\n      <link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \r\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n      <div style=\"text-align:center\">\r\n        <h1 class=\"fuente\">\r\n          {{nuevoJuego.nombre}}!\r\n        </h1>\r\n       </div>\r\n      <h2></h2>\r\n      <form name=\"juego\" >\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-3\"></div>\r\n              <div class=\"col-sm-6\">\r\n          Primer número: <input [(ngModel)]=\"nuevoJuego.primer\" name=\"primer\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n         \r\n          Operador: <input [(ngModel)]=\"nuevoJuego.operador\" name=\"op\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n            \r\n          Segundo número: <input [(ngModel)]=\"nuevoJuego.segundo\" name=\"segundo\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n                        \r\n          Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n                            \r\n          <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n                \r\n          <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n        \r\n          <h2 [hidden]=\"ocultarVerificar\"><p><mat-spinner>.</mat-spinner><br />Esperando número...</p></h2>\r\n          <h3 [hidden]=\"!aux\">Adivinaste el número</h3>\r\n          <h3 [hidden]=\"aux\">Aún no gano </h3>\r\n        </div>\r\n      </div>        \r\n      </form>\r\n      <div id=\"snackbar\">{{Mensajes}}</div> \r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- \r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-8 text-left\"> \r\n      <div class=\"container\">\r\n        <div style=\"text-align:center\">\r\n          <h1>\r\n            {{nuevoJuego.nombre}}!\r\n          </h1>\r\n         </div>\r\n        \r\n\r\n<form name=\"juego\">\r\n  <ul >\r\n     <li >\r\n     Primer número: <input [(ngModel)]=\"nuevoJuego.primer\" name=\"primer\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n    </li>\r\n    <li>\r\n     Operador: <input [(ngModel)]=\"nuevoJuego.operador\" name=\"op\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n      \r\n    </li>\r\n    <li>\r\n     Segundo número: <input [(ngModel)]=\"nuevoJuego.segundo\" name=\"segundo\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n      \r\n    </li>\r\n    <li>\r\n      Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n       \r\n     </li>\r\n    <li>\r\n      <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n    </li>\r\n    \r\n      <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n    \r\n    \r\n      <h2 [hidden]=\"ocultarVerificar\"><p><mat-spinner>.</mat-spinner><br />Esperando número...</p></h2>\r\n      <h3 [hidden]=\"!aux\">Adivinaste el número</h3>\r\n      <h3 [hidden]=\"aux\">Aún no gano </h3>\r\n    \r\n  </ul>\r\n  \r\n  </form>\r\n\r\n        <div id=\"snackbar\">{{Mensajes}}</div> \r\n        </div>\r\n    <div class=\"col-sm-2s sidenav\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n -->\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    // NuevoJuego() {
    //   this.ocultarVerificar=false;
    //   this.repetidor = setInterval(()=>{       
    //     this.Tiempo--;
    //     console.log("llego", this.Tiempo);
    //     if(this.Tiempo==0 ) {
    //       clearInterval(this.repetidor);
    //       this.verificar();
    //       this.ocultarVerificar=true;
    //       this.Tiempo=5;
    //     }
    //   }, 900);
    // }
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.nuevoJuego.generarOperacion();
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                _this.verificar();
            }
        }, 900);
    };
    // verificar()
    // {
    //   this.ocultarVerificar=false;
    //   clearInterval(this.repetidor);
    // }  
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        this.nuevoJuego.verificar();
        if (this.nuevoJuego.gano) {
            this.aux = true;
            this.MostarMensaje("Sos un Genio!!!", true);
        }
        else {
            this.aux = false;
            this.MostarMensaje("Ooops, casi lo lograste!", false);
        }
        this.enviarJuego.emit(this.nuevoJuego);
        //this.nuevoJuego = new JuegoAgilidad();
        this.limpiarIntervalo();
    };
    AgilidadAritmeticaComponent.prototype.limpiarIntervalo = function () {
        clearInterval(this.repetidor);
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */](); //para borrar el anterior
    };
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n<h1> Listado de Resultados </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // alert(this.listadoParaCompartir);
        console.log(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadMasListadoComponent);

//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #2196F3;\r\n    padding: 10px;\r\n    background:#D5D9FA;\r\n}\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgba(17, 215, 230, 0.973);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(255, 0, 106);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid text-center\">    \r\n        <div class=\"row content\">\r\n          <div class=\"col-sm-2 sidenav\">\r\n          </div>\r\n          <div class=\"col-sm-8 text-left\"> \r\n            <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n            <div style=\"text-align:center\">\r\n              <h1>\r\n                {{nuevoJuego.nombre}}!\r\n              </h1>\r\n             </div>\r\n            <h2></h2>\r\n            <form name=\"juego\" >\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\"></div>\r\n                <div class=\"col-sm-7\">\r\n                    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n                    \r\n                    <p> </p> \r\n                      <h1>Palabra desordenada: {{nuevoJuego.palabraDesordenada}}  </h1>\r\n                      <br /> <input [(ngModel)]=\"nuevoJuego.palabraIngresada\" placeholder=\"ingrese la palabra ordenada\" name=\"palabraOrdenadaa\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n                  \r\n                      <!-- <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.esperando!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>    -->        \r\n                      <h2><button *ngIf=\"ocultarComenzar\" (click)=\"generarPalabra()\"  class=\"btn btn-info btn-lg\">Comenzar</button></h2> \r\n\r\n                      <!---->\r\n                      <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n                      \r\n                         <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n                      \r\n                      <h2><p *ngIf=\"!ocultarVerificar\" ><mat-spinner>.</mat-spinner>Esperando que ingrese una palabra</p></h2>\r\n                </div>\r\n                <div class=\"col-sm-3\"></div>\r\n              </div>\r\n\r\n            </form>\r\n            <div id=\"snackbar\">{{Mensajes}}</div> \r\n          <div class=\"col-sm-2 sidenav\">        \r\n          </div>\r\n        </div>\r\n      </div>\r\n      "

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaComponent = (function () {
    function AnagramaComponent() {
        this.ocultarComenzar = true;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.ocultarVerificar = true;
    }
    AnagramaComponent.prototype.generarPalabra = function () {
        this.nuevoJuego.asignarPalabra();
        this.contador = 0;
        this.ocultarVerificar = false;
        this.nuevoJuego.gano = false;
        this.Mensajes = "";
        this.ocultarComenzar = false;
    };
    AnagramaComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Sos un Genio!!!", true);
        }
        else {
            this.mensaje = "Ooops, casi lo lograste!";
            this.MostarMensaje(this.mensaje);
            this.nuevoJuego.palabraIngresada = "";
            this.nuevoJuego.palabraDesordenada = "";
        }
        console.info("Gano: ", this.nuevoJuego.gano);
        this.ocultarComenzar = true;
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            //modelo.ocultarVerificar=false;
        }, 3000);
        console.info("objeto", x);
    };
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnagramaComponent);

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel\r\n{\r\n    height: 200px;\r\n    background-image: url(\"/assets/imagenes/cabecera.png\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.hero-text {\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\ncolor: #3E06B0;\r\n}\r\n\r\n.hero-text a {\r\nborder: none;\r\noutline: 0;\r\ndisplay: inline-block;\r\npadding: 10px 25px;\r\ncolor: black;\r\nbackground-color: #ddd;\r\ntext-align: center;\r\ncursor: pointer;\r\n}\r\n\r\n.hero-text a:hover {\r\nbackground-color: #555;\r\ncolor: white;\r\n}\r\n\r\na{\r\n    color: #243dc0;\r\n    text-decoration: none;\r\n}\r\n\r\n.button-right {\r\n    /*\r\n    margin-bottom: 0;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    line-height: 1.42857143;\r\n    text-align: right; */\r\n    padding: 20px 12px;\r\n    float: right;\r\n \r\n\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Lobster', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Lobster\" rel=\"stylesheet\"> \r\n\r\n<div class=\"panel panel-default fuente\">\r\n  <div class=\"hero-text\">\r\n      <h1 style=\"font-size:50px;font-weight:600;\">Sala de Juegos</h1><br />\r\n  </div>\r\n     \r\n      <a mat-button class=\"button-right\" href=\"https://github.com/tamm005\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n      <a mat-button class=\"button-right\" routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\r\n\r\n  <div class=\"btn\">\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li> <a mat-button routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>      \r\n      <li><a mat-button routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fuente{\r\n    font-family: 'Lobster Two', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-menu></app-menu>\r\n<link href=\"https://fonts.googleapis.com/css?family=Lobster+Two\" rel=\"stylesheet\"> \r\n<div style=\"text-align:center\">\r\n  <h1 class=\"fuente\">\r\n   Sala de Juegos\r\n  </h1>\r\n </div>\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let juego of listado\">\r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n     \r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
        console.info(this.listado + "app-listado-de-resultados");
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n/* Set a specific color for each brand */\r\n\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \r\n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \r\n\r\n<!-- Centered Pills -->\r\n<!-- <ul class=\"nav nav-pills nav-justified\">\r\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\r\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\r\n  </ul>\r\n  \r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados> -->\r\n\r\n<app-listados></app-listados>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  listados works!\r\n</p> -->\r\n<ul class=\"nav nav-pills nav-justified\">\r\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\r\n    \r\n    <li><a (click)=\"Show()\">Mostrar Todos</a></li>\r\n    <li><a (click)=\"filtTrue()\">Ganadores</a></li>\r\n    <li><a (click)=\"filtFalse()\">Perdedores</a></li>\r\n  </ul>    \r\n  \r\n  <div class=\"container\">\r\n    <table class=\"table\" [hidden]=\"mostrar\">\r\n        <thead>\r\n          <!-- <th>Cuit</th> -->\r\n          <th>Usuario</th>\r\n          <th>email</th>\r\n          <th>fecha</th>\r\n          <!-- <th>sexo</th> -->\r\n          <th>puntaje</th>\r\n          <th>gano?</th>\r\n        </thead>\r\n        <tbody *ngFor=\"let us of users\">\r\n          <!-- <td>{{us.cuit}}</td> -->\r\n          <td>{{us.usuario}}</td>\r\n          <td>{{us.email}}</td>\r\n          <td>{{us.fecha}}</td>      \r\n          <!-- <td>{{us.sexo}}</td> -->\r\n          <td>{{us.puntaje}}</td>\r\n          <td>{{us.gano}}</td>\r\n          \r\n        </tbody>\r\n      </table>\r\n    \r\n      <table class=\"table\" [hidden]=\"mostrarFilt\">\r\n        <thead>\r\n          <!-- <th>Cuit</th> -->\r\n          <th>Usuario</th>\r\n          <th>email</th>\r\n          <th>fecha</th>\r\n          <!-- <th>sexo</th> -->\r\n          <th>puntaje</th>\r\n          <th>gano</th>\r\n          \r\n        </thead>\r\n        <tbody *ngFor=\"let us of filtrado\">\r\n          <!-- <td>{{us.cuit}}</td> -->\r\n          <td>{{us.usuario}}</td>\r\n          <td>{{us.email}}</td>\r\n          <td>{{us.fecha}}</td>      \r\n          <!-- <td>{{us.sexo}}</td> -->\r\n          <td>{{us.puntaje}}</td>\r\n          <td>{{us.gano}}</td>\r\n          \r\n        </tbody>\r\n      </table>\r\n  </div>\r\n  \r\n  <!-- <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table> -->\r\n  \r\n  \r\n    \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_archivosjugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivosjugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListadosComponent = (function () {
    function ListadosComponent(archivo, filtro) {
        this.archivo = archivo;
        this.filtro = filtro;
        this.mostrar = true;
        this.motrarFilt = true;
        this.settings = {
            columns: {
                usuario: {
                    title: 'usuario'
                },
                email: {
                    title: 'email'
                },
                fecha: {
                    title: 'fecha'
                },
                puntaje: {
                    title: 'puntaje'
                },
                gano: {
                    title: 'gano'
                }
            }
        };
        this.listar();
    }
    ListadosComponent.prototype.listar = function () {
        var _this = this;
        this.archivo.httpGetPromise("usuarios.json")
            .then(function (data) { _this.users = data; _this.aux = data; })
            .catch(function (error) { return console.error(error); });
    };
    ListadosComponent.prototype.filtrar = function (modo) {
        var _this = this;
        this.filtro.filtrar("usuarios.json", modo)
            .then(function (data) { _this.filtrado = data; })
            .catch(function (error) { return console.error(error); });
    };
    ListadosComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ListadosComponent.prototype.filtTrue = function () {
        this.filtrar("gano");
        this.mostrar = true;
        if (this.motrarFilt == false) {
            this.motrarFilt = true;
        }
        else {
            this.motrarFilt = false;
        }
        console.log(this.filtrado);
    };
    ListadosComponent.prototype.filtFalse = function () {
        this.filtrar("perdio");
        this.mostrar = true;
        if (this.motrarFilt == false) {
            this.motrarFilt = true;
        }
        else {
            this.motrarFilt = false;
        }
        console.log(this.filtrado);
    };
    ListadosComponent.prototype.Show = function () {
        this.filtrar("todos");
        this.mostrar = true;
        if (this.motrarFilt == false) {
            this.motrarFilt = true;
        }
        else {
            this.motrarFilt = false;
        }
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_archivosjugadores_service__["a" /* ArchivosjugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_archivosjugadores_service__["a" /* ArchivosjugadoresService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _b || Object])
], ListadosComponent);

var _a, _b;
//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n.bg-1 { \r\n    background-color: #1abc9c; /* Green */\r\n    color: #ffffff;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.login{\r\n    max-width: 400px;\r\n    padding: 15px;\r\n  \r\n  }\r\n  #avatar{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0px auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n    border-style: solid;\r\n    border-width: 5px;\r\n    border-color: white;\r\n  }\r\n  form{\r\n    width: 450;\r\n    margin: auto;\r\n    background: rgba(0,0,0,0.4);\r\n    padding: 10px 20px;\r\n    \r\n    margin-top: 20px;\r\n    border-radius: 7px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      Usuario\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 5px\">\r\n    <div class=\"col-lg-6\">\r\n      Clave\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"password\" [(ngModel)]=\"clave\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\r\n    <div class=\"col-lg-12\">\r\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\r\n    </div>\r\n  </div>\r\n</div-->\r\n\r\n<!-- \r\n <div class=\"container\" >\r\n  <div class=\"jumbotron\" style=\"padding:50px;\">\r\n    <form action=\"return true;\">\r\n      <div class=\"imgcontainer\">\r\n        <img src=\"../assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <label><b>Usuario</b></label>\r\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\r\n\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\r\n            \r\n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\r\n       \r\n        <div *ngIf=\"!logeando\" class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\r\n              {{progresoMensaje}} - {{progreso}}%\r\n            </div>\r\n        </div>\r\n       \r\n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\r\n      </div>\r\n\r\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\r\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\r\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\r\n      </div>\r\n     \r\n    </form>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"/Principal\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"/Registro\">Registrarse</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n           \r\n\r\n  <!-- First Container -->\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\r\n      <div *ngIf=\"!logeando\" class=\"progress\">\r\n          <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\r\n            {{progresoMensaje}} - {{progreso}}%\r\n          </div>\r\n      </div>\r\n      <div class=\"formIngreso animated bounceIn\">        \r\n            \r\n          <form id=\"login\" class=\"login\">\r\n            <img  src=\"../assets/imagenes/avatar2.png\" class=\"img-responsive\" id=\"avatar\">\r\n            <div class=\"form-group\">\r\n              <label>Usuario</label>\r\n              <input type=\"email\" class=\"form-control\" name=\"usuario\" id=\"usuario\" value=\"usuario\" [(ngModel)]=\"usuario\" placeholder=\"Usuario\" required=\"required\" autofocus=\"autofocus\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Contraseña</label>\r\n              <input type=\"password\" class=\"form-control\" name=\"clave\" id=\"clave\" [(ngModel)]=\"clave\" placeholder=\"Contraseña\" required=\"required\"> \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>\r\n                <!-- <input class=\"\" id=\"recordarme\" type=\"checkbox\" checked> Recuerdame -->\r\n                <mat-checkbox type=\"checkbox\" checked=\"checked\"> Recuerdame!</mat-checkbox>\r\n              </label>\r\n            </div>\r\n            <input type=\"submit\" id=\"logIn\" class=\"btn btn-block btn-success\" (click)=\"MoverBarraDeProgreso()\" value=\"enviar\">\r\n         \r\n          </form>\r\n        </div>\r\n\r\n    <h2></h2>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.arrayUsuarios = new Array();
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        this.arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
        console.log(this.arrayUsuarios);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        var user = JSON.parse(localStorage.getItem("usuario"));
        console.log(user);
        if (user != null) {
            if (this.usuario === user.email && this.clave === user.pass) {
                console.log("entro");
                this.router.navigate(['/Juegos']);
            }
            else {
                var x = document.getElementById("usuario");
                this.router.navigate(['/Login']);
            }
        }
        else
            var x = document.getElementById("usuario");
        alert("Primero debe registrarse");
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        this.usuario = '';
        this.clave = '';
        this.router.navigate(['/Registro']);
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            // console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                // case 75:
                //   this.clase="progress-bar progress-bar-success progress-bar-striped active";
                //   this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
                //   break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border-radius: 5px; /* 5px rounded corners */\r\n    max-width: 300px;\r\n   height: 100%;\r\n    margin: 10px;\r\n    padding-bottom: 10px;\r\n    float: left;\r\n  background-color: #DEF3A6;\r\n    text-align: center;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image \r\nimg {\r\n    border-radius: 5px 5px 0 0;\r\n    width: 200px;\r\n    height: 200px;\r\n}*//* Add some padding inside the card container */\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n\r\n.button{\r\n    margin-left: 1px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    padding: 5px 15px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px #999;\r\n\r\n    border: none;\r\n    outline: 0;\r\n \r\n    padding: 8px;\r\n    color: white;\r\n   /* background-color: #000;*/\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n  \r\n  .button:hover {background-color: #3e8e41}\r\n  \r\n  .button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\n\r\n.fuente{\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \r\n<div class=\"bg-1\">\r\n  <div class=\"container\">\r\n  \r\n      \r\n    <div class=\"row text-center fuente\">\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"thumbnail\">\r\n            <img src=\"../assets/imagenes/cerebro.png\" alt=\"Paris\" width=\"400\" height=\"300\"><br />\r\n            <h3><strong>Velocidad aritmética </strong></h3>\r\n            <p>Juego de agilidad mental</p>\r\n            <!-- <button class=\"btn\">Buy Tickets</button> -->\r\n            <button mat-raised-button color=\"primary\"  (click)=\"Juego('Agilidad')\">Jugar</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"thumbnail\">\r\n              <img src=\"../assets/imagenes/adivina.png\" alt=\"Paris\" width=\"400\" height=\"300\"><br />\r\n              <h3><strong>Adivina el número secreto </strong></h3>\r\n              <p>Juego de estrategia</p>\r\n              <!-- <button class=\"btn\">Buy Tickets</button> -->\r\n              <button mat-raised-button color=\"primary\"  (click)=\"Juego('Adivina')\">Jugar</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n              <div class=\"thumbnail\">\r\n                <img src=\"../assets/imagenes/ppt.png\" alt=\"Paris\" width=\"400\" height=\"300\"><br />\r\n                <h3><strong>Piedra Papel o Tijera</strong></h3>\r\n                <p>Juego contra la máquina</p>\r\n                <!-- <button class=\"btn\">Buy Tickets</button> -->\r\n                <button mat-raised-button color=\"primary\"  (click)=\"Juego('PiedraPapelTijera')\">Jugar</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div class=\"thumbnail\">\r\n                  <img src=\"../assets/imagenes/miJuego.png\" alt=\"Paris\" width=\"400\" height=\"300\"><br />\r\n                  <h3><strong>¿Qué ves? </strong></h3>\r\n                  <p>Juego de agilidad mental</p>\r\n                  <!-- <button class=\"btn\">Buy Tickets</button> -->\r\n                  <button mat-raised-button color=\"primary\"  (click)=\"Juego('QueVes')\">Jugar</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                  <div class=\"thumbnail\">\r\n                    <img src=\"../assets/imagenes/anagrama.png\" alt=\"Paris\" width=\"400\" height=\"300\"><br />\r\n                    <h3><strong>Anagrama </strong></h3>\r\n                    <p>Juego de agilidad mental</p>\r\n                    <!-- <button class=\"btn\">Buy Tickets</button> -->\r\n                    <button mat-raised-button color=\"primary\"  (click)=\"Juego('Anagrama')\">Jugar</button>\r\n                  </div>\r\n                </div>\r\n        \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'PiedraPapelTijera':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'QueVes':
                this.router.navigate(['/Juegos/QueVes']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* цвет фона и рамки навигационного меню */\r\n.navbar-default {\r\n    background-color: #3f51b5;\r\n    border-color: #3f51b5;\r\n}\r\n/* цвет текста, содержащий название сайта или бренда */\r\n.navbar-default .navbar-brand {\r\n    color: white;\r\n}\r\n/* цвет текста (название сайта или бренда), при поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n    color: #a5aed8;\r\n}\r\n/* Цвет пунктов навигационного меню */\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n}\r\n/* Цвет пункта меню, при поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n    color: #a5aed8;\r\n}\r\n/* Цвет и фон активного пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > .active > a, \r\n.navbar-default .navbar-nav > .active > a:hover, \r\n.navbar-default .navbar-nav > .active > a:focus {\r\n    color: #a5aed8;\r\n    background-color: black;\r\n}\r\n/* Цвет и фон открытого пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > .open > a, \r\n.navbar-default .navbar-nav > .open > a:hover, \r\n.navbar-default .navbar-nav > .open > a:focus {\r\n    color: #555;\r\n    background-color: #D5D5D5;\r\n}\r\n/* Цвет стрелочки (треугольничка) у раскрывающихся пунктов меню */\r\n.navbar-default .navbar-nav > .dropdown > a .caret {\r\n    border-top-color: #777;\r\n    border-bottom-color: #777;\r\n}\r\n/* Цвет стрелочки (треугольничка) при поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\r\n.navbar-default .navbar-nav > .dropdown > a:focus .caret {\r\n    border-top-color: #333;\r\n    border-bottom-color: #333;\r\n}\r\n/* Цвет стрелочки (треугольничка), открывшегося пункта меню */\r\n.navbar-default .navbar-nav > .open > a .caret, \r\n.navbar-default .navbar-nav > .open > a:hover .caret, \r\n.navbar-default .navbar-nav > .open > a:focus .caret {\r\n    border-top-color: #555;\r\n    border-bottom-color: #555;\r\n}\r\n/* CSS стили для мобильных устройств */\r\n/* Цвет рамки у кнопки, которая открывает меню */\r\n.navbar-default .navbar-toggle {\r\n    border-color: #DDD;\r\n}\r\n/* Цвет фона кнопки (которая открывает меню) при поднесении к ней курсора мышки или при нахождении её в фокусе */\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n    background-color: #DDD;\r\n}\r\n/* Цвет полосочек в кнопочке, которая открывает меню */\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #CCC;\r\n}\r\n \r\n@media (max-width: 767px) {\r\n/* Цвет пунктов меню в раскрывающихся списках */\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n        color: #777;\r\n    }\r\n/* Цвет и фон пункта меню в раскрывающихся списках, при поднесении к нему курсора мышки или при нахождении его в фокусе */\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n        color: #333;\r\n        background-color: transparent;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div>\r\n    <button routerLink=\"/Principal\">Principal</button>\r\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\r\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\r\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\r\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \r\n    <button routerLink=\"/error\">Error</button>\r\n  \r\n</div-->\r\n\r\n<!--nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\r\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n        </ul>\r\n    </div>\r\n  </nav-->\r\n  <nav class=\"navbar  navbar-default\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n                                  \r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\r\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n                <li><a  (click)=\"Juego('PiedraPapelTijera')\">PiedraPapelTijera</a></li>\r\n                <li><a  (click)=\"Juego('QueVes')\">¿Qué ves?</a></li>\r\n                <li><a  (click)=\"Juego('Anagrama')\">Anagrama</a></li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a href=\"/QuienSoy\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n                  <li><a href=\"/Principal\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n                </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n      \r\n   "

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'PiedraPapelTijera':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'QueVes':
                this.router.navigate(['/Juegos/QueVes']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margen-izq{\r\n    margin-left:170px;\r\n    \r\n}\r\n.color-fondo{\r\n    background-color:#91d3cb;\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Permanent Marker', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button *ngIf=\"mostrarBoton\" type=\"button\" class=\"btn\" (click)=\"limpiar()\" >Abandonar</button>\r\n<div class=\"content\">\r\n  <div class=\"well color-fondo\">\r\n    <h1 style=\"text-align:center\">\r\n    <h3>{{eleccionMaquina}}</h3>\r\n    <h2>{{resultado}}</h2> \r\n    <h3>{{estadisticas}}</h3> \r\n    \r\n    </h1><br />\r\n    \r\n    \r\n    <div class=\"row margen-izq\">  \r\n      <div class=\"col-md-4\">\r\n        <img alt='Icono Piedra' src='../../../assets/imagenes/rock-icon.png'><br /><br /><br />\r\n        <p>\r\n          <button type=\"button\" class=\"btn\" (click)=\"elijePiedra()\">Piedra</button>\r\n        </p>\r\n      </div>\r\n    \r\n      <div class=\"col-md-4\">\r\n        <img alt='Icono Papel' src='../../../assets/imagenes/paper-icon.png'><br /><br /><br />\r\n        <p>\r\n          <button type=\"button\" class=\"btn\" (click)=\"elijePapel()\">Papel</button>\r\n        </p>\r\n      </div>\r\n\r\n    \r\n      <div class=\"col-md-4\">\r\n        <img alt='Icono Tijera' src='../../../assets/imagenes/scissor-icon.png'><br /><br /><br />\r\n        <p>\r\n          <button type=\"button\" class=\"btn\" (click)=\"elijeTijera()\">Tijera</button>\r\n        </p>\r\n      </div> \r\n\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-sm-1 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-10 text-left\"> \r\n      <button *ngIf=\"mostrarBoton\" type=\"button\" class=\"btn btn-info\" (click)=\"limpiar()\" >Abandonar</button>\r\n      <div class=\"content\">\r\n        <div class=\"well color-fondo\">\r\n          <h1 style=\"text-align:center\">\r\n          <h3 class=\"fuente\">{{eleccionMaquina}}</h3>\r\n          <h2>{{resultado}}</h2> \r\n          <h3>{{estadisticas}}</h3> \r\n          \r\n          </h1><br />\r\n          \r\n          \r\n          <div class=\"row margen-izq\">  \r\n            <div class=\"col-md-4\">\r\n              <img alt='Icono Piedra' src='../../../assets/imagenes/rock-icon.png'><br /><br /><br />\r\n              <p>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"elijePiedra()\">Piedra</button>\r\n              </p>\r\n            </div>\r\n          \r\n            <div class=\"col-md-4\">\r\n              <img alt='Icono Papel' src='../../../assets/imagenes/paper-icon.png'><br /><br /><br />\r\n              <p>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"elijePapel()\">Papel</button>\r\n              </p>\r\n            </div>\r\n      \r\n          \r\n            <div class=\"col-md-4\">\r\n              <img alt='Icono Tijera' src='../../../assets/imagenes/scissor-icon.png'><br /><br /><br />\r\n              <p>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"elijeTijera()\">Tijera</button>\r\n              </p>\r\n            </div> \r\n      \r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PiedraPapelTijeraComponent = (function () {
    function PiedraPapelTijeraComponent() {
        this.eleccionMaquina = "piedra-papel-tijera!";
        this.mostrarBoton = false;
        this.empezar = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
    }
    PiedraPapelTijeraComponent.prototype.elijePiedra = function () {
        this.empezar.comenzar();
        this.mostrarBoton = true;
        this.eleccionMaquina = this.nuevoJuego.piedra();
        this.resultado = this.nuevoJuego.mensaje;
        this.estadisticas = this.nuevoJuego.mostarResultado();
    };
    PiedraPapelTijeraComponent.prototype.elijePapel = function () {
        this.empezar.comenzar();
        this.mostrarBoton = true;
        this.eleccionMaquina = this.nuevoJuego.papel();
        this.resultado = this.nuevoJuego.mensaje;
        this.estadisticas = this.nuevoJuego.mostarResultado();
    };
    PiedraPapelTijeraComponent.prototype.elijeTijera = function () {
        this.empezar.comenzar();
        this.mostrarBoton = true;
        this.eleccionMaquina = this.nuevoJuego.tijera();
        this.resultado = this.nuevoJuego.mensaje;
        this.estadisticas = this.nuevoJuego.mostarResultado();
    };
    PiedraPapelTijeraComponent.prototype.limpiar = function () {
        this.mostrarBoton = false;
        this.eleccionMaquina = "piedra-papel-tijera!";
        this.resultado = "";
        this.estadisticas = "";
        this.nuevoJuego.resetear();
    };
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    return PiedraPapelTijeraComponent;
}());
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PiedraPapelTijeraComponent);

//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeMenu{\r\nwidth: 80px;\r\nheight: 70px;\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: #100000;\r\n    }\r\n\r\n.color-fondo{\r\n    background-color:#1abc9c;\r\n}\r\n\r\n.carousel-text-right{\r\n    width: 65%;\r\n    height: 85%;\r\n    padding-left: 465px;\r\n    padding-bottom: 8px;\r\n    position: absolute;\r\n    right: 15%;\r\n    bottom: 20px;\r\n    color: #fff;\r\n    text-align: right;\r\n    text-align: justify;\r\n    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Acme', sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-cabecera>  </app-cabecera> \r\n<div class=\"container\" >\r\n   \r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item list-group-item-danger\">\r\n           \r\n\r\n</div>                <div class=\"media-body\">\r\n                    <div class=\"hero-text\">\r\n                        <h4 >Menú Principal</h4>\r\n                    </div>\r\n                 </div>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-success\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                    <img src=\"../assets/imagenes/saladejuegos.png\" class=\"media-object imagenDeMenu\" >\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Juegos</h4>\r\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item list-group-item-info\">\r\n            <a routerLink=\"/Listado\">\r\n              <div class=\"media\">\r\n                  <div class=\"media-left\">\r\n                      <img src=\"../assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu\" >\r\n                    </div>\r\n                <div class=\"media-body\">\r\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\r\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n                </div>\r\n                \r\n              </div> \r\n            </a>\r\n          </li>\r\n        <li class=\"list-group-item list-group-item-warning\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n                <div class=\"media-left\">\r\n                    <img src=\"../assets/imagenes/Configuracion.png\" class=\"media-object imagenDeMenu\" >\r\n                  </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\r\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n              </div>\r\n             \r\n            </div> \r\n          </a>\r\n        </li>\r\n    </ul> -->\r\n\r\n<app-cabecera>  </app-cabecera> \r\n\r\n\r\n\r\n\r\n\r\n<link href=\"https://fonts.googleapis.com/css?family=Acme\" rel=\"stylesheet\"> \r\n<div class=\"container-fluid fuente\" >\r\n  <div id=\"myCarousel\" class=\"carousel slide color-fondo\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\">\r\n      \r\n      <div class=\"item active\">\r\n        <img src='../../../assets/imagenes/ppyt.jpg' alt=\"Juegos\" style=\"width:44.5%;\">\r\n        <a routerLink=\"/Juegos\">\r\n          <div class=\"carousel-caption carousel-text-right\">          \r\n            <h3 class=\"text-right\">Juegos</h3>\r\n            <p class=\"text-right\">El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      \r\n\r\n      <div class=\"item\">\r\n        <img src='../../../assets/imagenes/listados.jpg' alt=\"Listados de resultados\" style=\"width:46.15%;\">\r\n         <a routerLink=\"/Listado\"> <!-- <a routerLink=\"/Listado\"> -->\r\n          <div class=\"carousel-caption carousel-text-right\">\r\n            <h3 class=\"text-right\">Listados de resultados</h3>\r\n            <!-- <p>Los listados de los resultados con ordenamiento y busqueda</p> -->\r\n            <p class=\"text-right\">Estadísticas y resultados del juego para cada jugador.</p>\r\n          </div>\r\n       </a>\r\n      </div>\r\n    \r\n      <div class=\"item\">\r\n        <img src=\"../../../assets/imagenes/settings.jpg\" alt=\"Configuración\" style=\"width:46%;\">\r\n        <a routerLink=\"/Login\">\r\n          <div class=\"carousel-caption carousel-text-right\">\r\n            <h3 class=\"text-right\">Configuración</h3>\r\n            <p class=\"text-right\"> Ajustes de la aplicacion y los métodos de autentificación</p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n  \r\n    </div>\r\n\r\n    <!-- Left and right controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/que-ves/que-ves.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.color-fondo{\r\n    background-color:#91d3a3;\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgba(17, 215, 230, 0.973);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(255, 0, 106);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Permanent Marker', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/que-ves/que-ves.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"content\">\r\n  <div class=\"well color-fondo\">\r\n    <div style=\"text-align:center\">\r\n      <h1>\r\n        {{nuevoJuego.nombre}}!\r\n      </h1>\r\n    </div>\r\n    <h1 style=\"text-align:center\">\r\n      <button type=\"button\" class=\"btn\" (click)=\"ComenzarJuego()\" >{{ mostrarJuego ? 'Terminar' : 'Empezar'}}</button>\r\n      <div *ngIf=\"mostrarJuego\"  class=\"well\">\r\n          <div class=\"row margen-izq\">  \r\n            <div class=\"col-md-4\">\r\n              <img alt='Icono Piedra' src='../../../assets/imagenes/{{miImagen}}.jpg'><br /><br /><br />\r\n              <p>\r\n                  Respuesta: <input [(ngModel)]=\"nuevoJuego.respuestaIngresada\" placeholder=\" Ingrese respuesta\" name=\"respuestaIngresada\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn\" (click)=\"verificar()\" >Verificar</button>\r\n      </div>\r\n    </h1><br />\r\n       \r\n    <h1 [hidden]=\"!this.nuevoJuego.gano\" style=\"text-align:center\">Ganaste! </h1>\r\n    <h1 [hidden]=\"!this.perdio\">Perdiste!</h1>\r\n\r\n  </div>\r\n</div> -->\r\n\r\n<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \r\n<div class=\"container-fluid text-center\">    \r\n  <div class=\"row content\">\r\n    <div class=\"col-sm-1 sidenav\">\r\n    </div>\r\n    <div class=\"col-sm-10 text-left\"> \r\n      <div class=\"content\">\r\n        <div class=\"well color-fondo\">\r\n          <div style=\"text-align:center\">\r\n            <h1 class=\"fuente\">\r\n              {{nuevoJuego.nombre}}!!!\r\n            </h1>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\"></div>\r\n            <div class=\"col-sm-5\" style=\"text-align:center\">\r\n              \r\n                \r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"ComenzarJuego()\" >{{ mostrarJuego ? 'Terminar' : 'Empezar'}}</button><br />\r\n                \r\n                <div *ngIf=\"mostrarJuego\"  class=\"well\">\r\n                    <div class=\"row margen-izq\">  \r\n                      <div class=\"col-md-12\">\r\n                        <img alt='Icono Piedra' src='../../../assets/imagenes/{{miImagen}}.jpg'><br /><br /><br />\r\n                        <p style=\"text-align:left\">\r\n                            Respuesta: <input [(ngModel)]=\"nuevoJuego.respuestaIngresada\" placeholder=\" Ingrese respuesta\" name=\"respuestaIngresada\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                    <button type=\"button\" mat-raised-button color=\"accent\" (click)=\"verificar()\" >Verificar</button>\r\n                </div>\r\n                <br />\r\n                 \r\n              <!-- <h1 [hidden]=\"!this.nuevoJuego.gano\" style=\"text-align:center\">Ganaste! </h1>\r\n              <h1 [hidden]=\"!this.perdio\">Perdiste!</h1> -->\r\n            </div>\r\n            <div class=\"col-sm-3\"></div>\r\n          </div> \r\n          <div id=\"snackbar\">{{Mensajes}}</div> \r\n      \r\n        </div>\r\n      </div>\r\n    <div class=\"col-sm-2 sidenav\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/que-ves/que-ves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueVesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_que_ves__ = __webpack_require__("../../../../../src/app/clases/juego-que-ves.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueVesComponent = (function () {
    function QueVesComponent() {
        this.ganoperdio = false;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_que_ves__["a" /* JuegoQueVes */](); //ya puedo mostrar el nombre
        this.mostrarJuego = false;
        console.info("Inicio Que Ves");
        this.miImagen = '1';
    }
    QueVesComponent.prototype.ComenzarJuego = function () {
        this.nuevoJuego.comenzar();
        this.mostrarJuego = !this.mostrarJuego;
        this.miImagen = this.nuevoJuego.imgMostrar;
        this.nuevoJuego.respuesta;
        //this.miImagen.jugar();
    };
    QueVesComponent.prototype.verificar = function () {
        if (this.nuevoJuego.verificar()) {
            this.ganoperdio = true;
            this.msjAcerto = "Acertaste!";
            this.MostarMensaje("Sos un Genio!!!", true);
            console.log(this.msjAcerto);
        }
        else {
            this.ganoperdio = false;
            this.msjAcerto = "Perdiste!";
            this.MostarMensaje("Ooops, casi lo lograste!", false);
            console.log(this.msjAcerto);
            //this.mostrarJuego = false;
        }
        this.nuevoJuego.gano = false;
    };
    /*  verificar()
      {
        this.contador++;
        this.ocultarVerificar=true;
        if (this.nuevoJuego.verificar()){
          this.MostarMensaje("Sos un Genio!!!",true);
        }else{
          this.mensaje = "Ooops, casi lo lograste!";
          this.MostarMensaje(this.mensaje);
        }
        console.info("Gano: ",this.nuevoJuego.gano);
      }  */
    QueVesComponent.prototype.asignarImagen = function () {
        //llama a la funcion que va a cargar la img desde la clase JuegoQueVes
        this.miImagen.comenzar(); //'';//lo que me retorne
    };
    QueVesComponent.prototype.ngOnInit = function () {
    };
    QueVesComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    return QueVesComponent;
}());
QueVesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-que-ves',
        template: __webpack_require__("../../../../../src/app/componentes/que-ves/que-ves.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/que-ves/que-ves.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QueVesComponent);

//# sourceMappingURL=que-ves.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\nbody {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\np {font-size: 16px;}\r\n.margin {margin-bottom: 45px;}\r\n\r\n/* .bg-1 { \r\n    background-color: #4F92BF;  /* Blue */\r\n    /* color: #ffffff;\r\n} */\r\n.bg-1{\r\n    \r\n        padding-top: 100px;\r\n        padding-bottom: 50px;\r\n        color: white;\r\n        background: linear-gradient(to top left, #ff6144, #7199f1);\r\n      \r\n}\r\n.bg-2 { \r\n    background-color: #4F92BF; /* blue */\r\n    color: #ffffff;\r\n}\r\n.bg-3 { \r\n    background-color: #ffffff; /* White */\r\n    color: #555555;\r\n}\r\n.bg-4 { \r\n    background-color: #2f2f2f; /* Black Gray */\r\n    color: #fff;\r\n}\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Comfortaa', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Comfortaa\" rel=\"stylesheet\"> \r\n  <nav class=\"navbar \">\r\n    <div class=\"container fuente\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"/Principal\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><button mat-button color=\"primary\"><a href=\"/QuienSoy#quien\">Quien</a></button></li>      \r\n          <li><button mat-button color=\"accent\"><a href=\"/QuienSoy#que\">Que es</a></button></li>\r\n          <li> <button mat-button color=\"warn\"><a href=\"/QuienSoy#donde\">Donde</a></button></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n  <!-- First Container -->\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center fuente\">\r\n    <h3 class=\"margin \">Tamara Cristaldo</h3>\r\n    <img src=\"/assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3> UTN FRA</h3>\r\n    <h2>Laboratorio IV </h2>\r\n  </div>\r\n  \r\n  <!-- Second Container -->\r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center fuente\">\r\n    <h3 class=\"margin\">Explicación del juego ¿Qué ves?</h3>\r\n    <p> ¿Qué ves? - EL objetivo de este juego es muy simple: cada imagen representa una palabra o frase que debes descubrir. </p>\r\n    <p> Puede ser un objeto, un verbo, un adjetivo, etc. ¿Crees poder hacerlo?. </p>\r\n    <br />\r\n    \r\n    <button mat-raised-button color=\"accent\" (click)=\"IrAMiJuego()\" >Ir al juego\r\n        <!-- <a href=\"../Juegos/QueVes\" >\r\n          Ir al juego <i class=\"material-icons md-24\"></i> \r\n        </a> -->\r\n    </button>\r\n\r\n  </div>\r\n  \r\n\r\n  \r\n  <!-- Footer -->\r\n  <footer id=\"donde\" class=\"container-fluid bg-4 text-center\">\r\n    <p>Modificado por <a href=\"https://github.com/tamm005\" target=\"blank\">www.tamara.com.ar</a></p> \r\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuienSoyComponent = (function () {
    function QuienSoyComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    QuienSoyComponent.prototype.IrAMiJuego = function () {
        // let user= JSON.parse(localStorage.getItem("usuario"));
        // if(user != null){
        this.router.navigate(['/Juegos/QueVes']);
        // }else{
        //   this.router.navigate(['/Login']);
        // }
    };
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], QuienSoyComponent);

var _a, _b;
//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n/* Add padding to container elements */\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 70%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n\r\n.bg-1 { \r\n    background-color: #1abc9c; /* Green */\r\n    color: #ffffff;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n.material-button{\r\n    color: #ffffff;\r\n}\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <body>\r\n\r\n  <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"/Principal\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"/Registro\">Registrarse</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>  \r\n  <div id =\"quiwn\" class=\"container-fluid bg-1 text-center\">\r\n  \r\n  <div id=\"id01\" >\r\n   \r\n    <form class=\"modal-content animate\" >\r\n      <div class=\"container\">\r\n        <label><b>Email</b></label>\r\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\r\n  \r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\r\n  \r\n        <label><b>Repita la clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\r\n        <input type=\"checkbox\" checked=\"checked\">Recordarme\r\n      \r\n        <div class=\"clearfix\">            \r\n          <button mat-raised-button color=\"warn\"><a class=\"material-button\" routerLink=\"/Principal\"> Cancelar</a></button>\r\n          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"material-button\">Registrarme</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n  <script>\r\n\r\n  var modal = document.getElementById('id01');\r\n\r\n  window.onclick = function(event) {\r\n      if (event.target == modal) {\r\n          modal.style.display = \"none\";\r\n      }\r\n  }\r\n  </script>\r\n\r\n  \r\n  \r\n  </body> -->\r\n\r\n<body>\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <span><h2 id=\"terminos\">Términos y condiciones</h2><br /><br /></span>\r\n    </mat-toolbar-row>\r\n    \r\n     <mat-toolbar-row>\r\n        <span>El Gobierno de la República Argentina no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños,<br />\r\n           pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso,<br />\r\n            en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión,<br />\r\n             virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</span>\r\n        <span class=\"example-spacer\"></span>        \r\n     </mat-toolbar-row>\r\n     <mat-toolbar-row>\r\n        <span><p><br />El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p></span>\r\n        <span class=\"example-spacer\"></span>        \r\n     </mat-toolbar-row>\r\n     <mat-toolbar-row>\r\n        <span></span>\r\n        <span class=\"example-spacer\"></span>        \r\n     </mat-toolbar-row>\r\n  </mat-toolbar>\r\n      <div style=\"text-align:center\">\r\n          <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\r\n          <button mat-raised-button color=\"primary\" onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\r\n          <button mat-raised-button color=\"warn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\r\n\r\n          <div id=\"id01\" class=\"modal\">\r\n            <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n            <form class=\"modal-content animate\" >\r\n              <div class=\"container\">\r\n                <!-- <label><b>Email</b></label>\r\n                <input  [(ngModel)]=\"email\"  type=\"email\" placeholder=\"Ingrese email\" name=\"email\" required> -->\r\n                \r\n                <label><b>Email</b></label>\r\n                <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Ingrese email\" name=\"email\" required>\r\n\r\n                <label><b>Clave</b></label>\r\n                <input type=\"password\"   [(ngModel)]=\"pass\"  placeholder=\"Ingrese la clave\" name=\"psw\" required>\r\n          \r\n                <label><b>Repita la clave</b></label>\r\n                <input  [(ngModel)]=\"pass2\"  type=\"password\" placeholder=\"repita la misma clave\" name=\"psw-repeat\" required>\r\n                <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\r\n                <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\r\n          \r\n                <!-- <div class=\"clearfix\"> -->\r\n                  <button mat-raised-button color=\"warn\" onclick=\"document.getElementById('id01').style.display='none'\" >Me arrepenti</button>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"registrarse()\" >Registrarme</button>\r\n                <!-- </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n      </div>\r\n     \r\n      \r\n      <script>\r\n      // Get the modal\r\n      var modal = document.getElementById('id01');\r\n      \r\n      // When the user clicks anywhere outside of the modal, close it\r\n      window.onclick = function(event) {\r\n          if (event.target == modal) {\r\n              modal.style.display = \"none\";\r\n          }\r\n      }\r\n      </script>\r\n\r\n\r\n      \r\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistroComponent = (function () {
    function RegistroComponent(route, router) {
        this.route = route;
        this.router = router;
        this.email = "admin@admin.com";
        this.pass = "admin";
        this.pass2 = "admin";
    }
    RegistroComponent.prototype.registrarse = function () {
        if (this.email != null && this.email != undefined && this.pass != null && this.pass != undefined && this.pass2 != null && this.pass2 != undefined) {
            if (this.pass == this.pass2) {
                localStorage.setItem("usuario", '{"email":"' + this.email + '","pass":"' + this.pass + '"}');
                this.router.navigate(['/Juegos']);
            }
            else {
                alert("Las contraseñas no coinciden");
            }
        }
        else {
            alert("Complete todos los campos");
        }
    };
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegistroComponent);

var _a, _b;
//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_que_ves_que_ves_component__ = __webpack_require__("../../../../../src/app/componentes/que-ves/que-ves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal
















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'PiedraPapelTijera', component: __WEBPACK_IMPORTED_MODULE_14__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
            { path: 'QueVes', component: __WEBPACK_IMPORTED_MODULE_15__componentes_que_ves_que_ves_component__["a" /* QueVesComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_16__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivosjugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosjugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchivosjugadoresService = (function () {
    function ArchivosjugadoresService(http) {
        this.http = http;
    }
    ArchivosjugadoresService.prototype.httpGetPromise = function (url) {
        return this.http
            .get("./../../assets/archivos/usuarios.json")
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handleError);
    };
    ArchivosjugadoresService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    ArchivosjugadoresService.prototype.handleError = function (error) {
        return error;
    };
    return ArchivosjugadoresService;
}());
ArchivosjugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArchivosjugadoresService);

var _a;
//# sourceMappingURL=archivosjugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JuegoServiceService = (function () {
    function JuegoServiceService() {
    }
    JuegoServiceService.prototype.listar = function () {
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JuegoServiceService);

//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__archivosjugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivosjugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JugadoresService = (function () {
    function JugadoresService(http, archivo) {
        this.http = http;
        this.archivo = archivo;
    }
    JugadoresService.prototype.filtrar = function (url, filtro) {
        var _this = this;
        var modo;
        if (filtro == "gano")
            modo = true;
        if (filtro == "perdio")
            modo = false;
        if (filtro == "todos") {
            return this.archivo
                .httpGetPromise(url)
                .then(function (data) { return data; })
                .catch(this.handleError);
        }
        return this.archivo
            .httpGetPromise(url)
            .then(function (data) {
            _this.userFIlt = data.filter(function (data) { return data.gano === modo; });
            return _this.userFIlt;
        })
            .catch(this.handleError);
    };
    JugadoresService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    JugadoresService.prototype.handleError = function (error) {
        return error;
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__archivosjugadores_service__["a" /* ArchivosjugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__archivosjugadores_service__["a" /* ArchivosjugadoresService */]) === "function" && _b || Object])
], JugadoresService);

var _a, _b;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map