'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">test-consort-group documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' : 'data-target="#xs-controllers-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' :
                                            'id="xs-controllers-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' : 'data-target="#xs-injectables-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' :
                                        'id="xs-injectables-links-module-AppModule-f554ae74daba7a380cebbdf51e09697a1b1910cfeec60ae1e8b7bb8f40caf3756fc786be1d3c1fa64074caf55fba313e0e7036725c7c33db14d04649d3405845"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' : 'data-target="#xs-controllers-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' :
                                            'id="xs-controllers-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' : 'data-target="#xs-injectables-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' :
                                        'id="xs-injectables-links-module-AuthModule-b90b7a5711c20f380b89acee404dca66caff8e96b347c8ad213951f8d948845e9f0c1223cc27d5c6fede6f53bf817b07bfcb3b39384e2a22b00778ec149e1957"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStretegy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStretegy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' : 'data-target="#xs-controllers-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' :
                                            'id="xs-controllers-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' }>
                                            <li class="link">
                                                <a href="controllers/CartController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' : 'data-target="#xs-injectables-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' :
                                        'id="xs-injectables-links-module-CartModule-fe4b3885f2e123c59a5a7599cb1a926f91c2bad55f95cbecccd535c234fad6e9a6e515ac3a770995fb9b809b6998ea19a2e8bc4e42b25bef9993fde1c4894044"' }>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' : 'data-target="#xs-controllers-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' :
                                            'id="xs-controllers-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' : 'data-target="#xs-injectables-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' :
                                        'id="xs-injectables-links-module-ProductModule-616429850a7128cef0518dd2e3667c95b564bf300b2fbabe0fc1671cf0fee2deb1a0944e062453aa897ee2b6b72ebc42e7bb2b585a6d11b28f17f46b0e6bf2fa"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PurchaseModule.html" data-type="entity-link" >PurchaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' : 'data-target="#xs-controllers-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' :
                                            'id="xs-controllers-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' }>
                                            <li class="link">
                                                <a href="controllers/PurchaseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchaseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' : 'data-target="#xs-injectables-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' :
                                        'id="xs-injectables-links-module-PurchaseModule-06ec81633744fbed16c72829551f63df4fa0d719e68bd524d381a478ec101333f039121bd5e945a9f8d9335b05d222e98479a7ee2a15dcc7daab579a0a695ec4"' }>
                                        <li class="link">
                                            <a href="injectables/PurchaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchaseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' : 'data-target="#xs-controllers-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' :
                                            'id="xs-controllers-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' : 'data-target="#xs-injectables-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' :
                                        'id="xs-injectables-links-module-UserModule-db44c8c9f74d046063dee2287ae483e4aeed716e718ae528e107cc664e06a4204d55b743a3844f7ba99f98cf2e80fd79c9759f77e55ca5daea32180d134dbc67"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CartController.html" data-type="entity-link" >CartController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PurchaseController.html" data-type="entity-link" >PurchaseController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCartDto.html" data-type="entity-link" >CreateCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePurchaseDto.html" data-type="entity-link" >CreatePurchaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePurchaseProductDto.html" data-type="entity-link" >CreatePurchaseProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Purchase.html" data-type="entity-link" >Purchase</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCartDto.html" data-type="entity-link" >UpdateCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStretegy.html" data-type="entity-link" >JwtStretegy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PurchaseService.html" data-type="entity-link" >PurchaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});