import { Controller, Get, Post, Render, Body } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index') // Főoldal
    getHome() {
        return {};
    }

    @Get('products')
    @Render('products') // Termékek oldal
    getProducts() {
        return {};
    }

    @Get('contact')
    @Render('contact') // Kapcsolat oldal
    getContact() {
        return {};
    }

    @Get('about')
    @Render('about') // Rólunk oldal
    getAbout() {
        return {};
    }

    @Get('order') // Új végpont az order oldal megjelenítésére
    @Render('order') // Rendelés oldal
    getOrder() {
        return {}; // Ez üres lehet, vagy adhatunk vissza alapértelmezett értékeket is
    }

    @Post('contact') // Az üzenet küldéséhez kapcsolódó útvonal
    @Render('thankyou') // Köszönő oldal
    async sendMessage(@Body() body) {
        // Itt lehet kezelni az üzenetet (pl. elmenteni az adatbázisba, e-mailt küldeni stb.)
        return {}; // Itt visszatérhetünk egy üzenettel is, ha szükséges
    }

    @Post('order') // Rendelés
    async placeOrder(@Body() body) {
        // Az űrlap adatainak kezelése
        return {
            name: body.name,
            billingAddress: body.billingAddress,
            shippingAddress: body.shippingAddress,
            product: body.product // hozzáadva a termék
        };
    }
}
