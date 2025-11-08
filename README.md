# Milestone 6: Deploy your application

## Project Objectives

The objective of this milestone is to deploy the **ALX Listing App** (Airbnb clone) to a cloud hosting platform so that it is publicly accessible.

By completing this milestone, you will:

- Configure your Next.js application for production.
- Deploy the app to `Vercel` (recommended) or an alternative platform like `Netlify`.
- Ensure all API integrations work correctly in the deployed environment.
- Verify that the app is fully responsive and functional in a live environment.

## Best Practices

1. **Environment Variables**: Ensure all API endpoints and sensitive keys are stored in environment variables (`.env.local`).
2. **Optimized Build**: Run `npm run build` to check for errors before deployment.
3. **Cross-Origin Resource Sharing (CORS)**: If your API is hosted separately, ensure CORS is configured to allow requests from your deployed domain.
4. **Performance Optimization**:
   - Use Next.js Image Optimization.
   - Enable caching where applicable.
5. **Error Handling**: Ensure proper error boundaries and fallback UI for failed API calls.

## Note:

- Ensure your app is publicly accessible via the provided URL.
- Double-check API integrations in the live environment.
- Submit your repository and `README.md` with the live link before the deadline.

## Additional Resources

- [Deploy a Next.js App](https://render.com/docs/deploy-nextjs-app)
- [Next.js + Vercel for Rapid (and free) Application Deployment](https://kladds.medium.com/next-js-vercel-for-rapid-and-free-application-deployment-7a45da08ff07)
- [How to Deploy Next.js Sites to Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)

### Tasks

#### 0. Prepare for Deployment

**mandatory**

1. **Duplicate the Repository**

   - Duplicate `alx-listing-app-04` and rename it to `alx-listing-app-deployed.`

2. **Configure Environment Variables**

   - Create a `.env.local` file in the root directory.
   - Store API base URLs and any required keys:

        ```bash
        NEXT_PUBLIC_API_BASE_URL=https://your-api-endpoint.com
        ```

     - Add `.env.local` to `.gitignore`.

3. **Update API Calls**

   - Modify API calls to use `process.env.NEXT_PUBLIC_API_BASE_URL:`

    ```bash
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
    ```

4. **Run a Production Build**
   - Test the build locally:
  
    ```bash
        npm run build
        npm run start
    ```

    - Fix any build errors before proceeding.

**Repo**:

- GitHub repository: alx-listing-app-deployed
- **File**: [.gitignore](./gitignore)

#### 1. Deploy to Vercel (Recommended)

**mandatory**

1. **Sign Up / Log In**

   - Create a free account at [Vercel](https://vercel.com/) if you don’t have one.

2. **Connect GitHub Repository**

   - Go to the Vercel dashboard and click “**Add New Project**”.
   - Select your `alx-listing-app-deployed` repository.

3. **Configure Deployment Settings**

   - **Framework Preset**: Next.js
   - **Root Directory**: `/`
   - **Environment Variables**: Add the same variables from `.env.local`.

4. **Deploy**

   - Click **Deploy** and wait for the build process to complete.
   - Vercel will provide a live URL (e.g., `https://alx-listing-app-[STUDENT_ID].vercel.app`).
   - Modify the url to contain your student id as shown above.

Add URLs here:

**Repo**:

- **GitHub repository**: **alx-listing-app-deployed**

#### 2. Verify Deployment

mandatory

1. Test All Pages

   - Check:
     - Homepage (`listing`)
     - Property details (`/property/[id]`)
     - Booking page (`/booking`)
     - API calls (ensure no CORS issues)

2. Check Responsiveness

   - Test on mobile, tablet, and desktop.

3. Debug if Needed

   - Check Vercel logs for deployment errors.
   - Ensure API endpoints are correct in production.

**Repo**:

- **GitHub repository**: **alx-listing-app-deployed**
