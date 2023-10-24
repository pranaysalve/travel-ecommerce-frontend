This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All things are present in the code. Open browser and head to ```http://localhost:3000```. 

- You can see all the available tours in the list. 
- Follow instructions from backend page - Use POSTMAN or anyother API tool to login and get Bearer token.
- - copy the token you get on POSTMAN and paste it into ```cont token = ''``` in the file  ``` travel-ecommerce-frontend/utils/api.ts```
- Add any tour to the cart. If the tour already exists in the cart it wont get added again. 
- Head to cart and you'll see the total tours you have added in the cart and the final figures under the checkout box. Type COUPON CODE as ```APPLY30``` and click on apply. Auto refresh is not working so, refresh the page and final figures reflect the respective data. 
- Remove excessive cart item and the respective changes will be reflected in checkout box.
- Now Checkout. Once you checkout, cart will be cleared.
- Go to booking you'll see the booked items on the booking page.
