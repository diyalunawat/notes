import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-04-10",
    typescript: true,
});

export const getStripeSession = async ({ priceId, domainUrl, customerId }: {
    priceId: string;
    domainUrl: string;
    customerId: string;
}) => {
    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        billing_address_collection: "auto",
        line_items: [{ price: priceId, quantity: 1 }],
        payment_method_types: ["card"],
        success_url: `${domainUrl}/payment/success`,
        cancel_url: `${domainUrl}/payment/cancelled`, 
    });

    return session.url as string; 
};
