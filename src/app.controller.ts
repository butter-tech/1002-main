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

    @Post('order')
    @Render('order') // Megrendelés oldal
    placeOrder(@Body() body) {
        return {
            name: body.name,
            billingAddress: body.billingAddress,
            shippingAddress: body.shippingAddress,
        };
    }
}
