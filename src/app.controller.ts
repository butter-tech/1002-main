import { Controller, Get, Post, Render, Body } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index')
    getHello() {
        return {};
    }

    @Post('order')
    @Render('order')
    placeOrder(@Body() body) {
        return {
            name: body.name,
            billingAddress: body.billingAddress,
            shippingAddress: body.shippingAddress,
        };
    }
}
