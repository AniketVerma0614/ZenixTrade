# ZenixTrade
# ZenixTrade – Zerodha Clone (by Apna College)

A **full-stack clone of Zerodha**, built with the **MERN** stack: MongoDB, Express, React, and Node.js. You developed this as part of Apna College’s Delta web development program.

## 🚀 Project Overview

- **Real-time Market Dashboard**: Integrated third-party APIs for live stock data.
- **Authentication & Authorization**: Secure user registration and login using JWT.
- **Portfolio Management**: Users can view and manage holdings and funds.
- **Trading Features**: Place buy/sell orders and view execution history.
- **Admin Dashboard**: Overview of users, orders, and holdings.
- **Responsive UI**: Built with React, styled to mirror Zerodha’s design.

## 📂 Repository Structure

```

backend/        # Express app, routes, controllers, middleware
frontend/       # React app (dashboard and UI)
dashboard/      # React dashboard components
tests/          # Jest & supertest API test suites
postman/        # Postman collections + environments
README.md       # This file

````

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd zenixtrade_project
````

2. Install dependencies:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ../dashboard
   npm install
   ```

3. Setup environment variables:

   * `.env` in `backend/`, e.g.:

     ```
     MONGO_URI=<your-mongo-connection-string>
     JWT_SECRET=<your_secret>
     ```

4. Run the app:

   ```bash
   # Terminal 1 (backend)
   cd backend
   npm run dev

   # Terminal 2 (frontend)
   cd frontend
   npm start

   # Terminal 3 (dashboard)
   cd dashboard
   npm start
   ```

---

## ✅ API Testing with Jest & Supertest

Located in `backend/tests/auth.test.js`, covering:

* **POST /signup**: successful signup, missing fields
* **POST /login**: valid login, incorrect credentials

**Run tests**:

```bash
cd backend
npm test
```

This validates core authentication flows and ensures robustness.

---

## 🧪 Manual & Automated API Testing (Postman)

Inside `postman/`:

* `ZenixTrade.postman_collection.json` – defines endpoints and assertions
* `ZenixTrade.postman_environment.json` – base URLs and variables

To run:

```bash
newman run ZenixTrade.postman_collection.json -e ZenixTrade.postman_environment.json --reporters cli,html
```

Add this to your CI pipeline for automated regression testing.

---

## 🔧 CI Integration (Optional)

Use **GitHub Actions** to automate:

* `npm test` (Jest)
* `newman run ...` (Postman)

Generate test coverage and format results (e.g., Jest with `--coverage`, Newman with HTML reports).

---

## 🧠 Testing Approach

1. **Unit Tests** – with Jest for individual functions.
2. **Integration Tests** – supertest for Express endpoints.
3. **Postman Collections** – manual & automated API flows.
4. **Test Cases**:

   * Signup: valid vs invalid requests
   * Login: correct/incorrect credentials
   * Protected routes: access control

*Test example:*

```js
test('login with invalid password returns 401', async () => {
  const res = await request(app)
    .post('/login')
    .send({ email: 'user@example.com', password: 'wrong' });
  expect(res.statusCode).toBe(401);
  expect(res.body).toHaveProperty('error');
});
```

---

## 📚 Learning Credit

This project is based on the **Zerodha clone course by Apna College** ([github.com][1], [linkedin.com][2], [linkedin.com][3], [github.com][4], [apnacollege.in][5]). It helped you master MERN stack fundamentals and trading UI design.

---

## ⚙️ Future Enhancements

* Add **UI E2E tests** using Cypress or Selenium.
* Integrate **socket-based real-time trading** (e.g., WebSockets).
* Build **feature-rich charts** with D3.js or Chart.js.
* Enhance security with **rate-limiting** and **OWASP ZAP scans**.

---

## 📞 Authors & Credits

* **Developed by:** Your Name (you)
* **Inspired by:** Apna College’s Zerodha Clone GitHub templates ([linkedin.com][2], [linkedin.com][3])
* **Special thanks:** Apna College mentors.

---

## 📝 License

This project is for educational purposes. Please don't use it commercially without permission.

```


 
