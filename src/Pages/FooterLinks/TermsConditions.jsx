import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to our website. By accessing or using our services, you agree to
        the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By using this website, you confirm that you accept these terms and that
        you agree to comply with them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of the Website</h2>
      <p className="mb-4">
        You agree to use the website only for lawful purposes. You must not use
        the website in a way that breaches any law or regulation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Accounts</h2>
      <p className="mb-4">
        You may be required to create an account to access certain features. You
        are responsible for maintaining the confidentiality of your account.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Intellectual Property
      </h2>
      <p className="mb-4">
        All content on this website, including text, graphics, and logos, is the
        property of the website owner and is protected by copyright laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or change these terms at any time.
        Continued use of the website after changes means you accept the new
        terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        If you have any questions about these terms, please contact us at{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-600 underline"
        >
          support@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsConditions;
