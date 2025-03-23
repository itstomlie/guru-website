import Head from "next/head"

const ChildSafetyPolicy = () => {
  return (
    <>
      <Head>
        <title>Child Safety Standards Policy</title>
        <meta
          name="description"
          content="Child Safety Standards Policy for [Your Company Name]. Learn about our commitment to child safety, content filtering, and our procedures for addressing CSAE and CSAM."
        />
      </Head>
      <main
        style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}
        className="space-y-10"
      >
        <h1>Child Safety Standards Policy</h1>

        <section>
          <h2>1. Introduction</h2>
          <p>
            At [Your Company Name], the safety and well-being of children is our
            top priority. We are committed to ensuring our app provides a secure
            environment for all users, particularly minors. In compliance with
            applicable laws and best practices, this policy outlines the
            standards our app adheres to in order to prevent and address child
            sexual abuse and exploitation.
          </p>
        </section>

        <section>
          <h2>2. Scope</h2>
          <p>
            This policy applies to all users of our social and dating app. It
            specifically covers the prevention of Child Sexual Abuse and
            Exploitation (CSAE) and the handling of Child Sexual Abuse Material
            (CSAM). By using our app, users agree to abide by these standards.
          </p>
        </section>

        <section>
          <h2>3. Published Standards</h2>
          <ul>
            <li>
              <strong>Explicit Prohibition:</strong> Our publicly accessible
              documents—including the Terms of Service, Community Guidelines,
              and other user policy materials—explicitly prohibit any form of
              CSAE. We do not tolerate any content or behavior that exploits
              children.
            </li>
            <li>
              <strong>Content Filtering:</strong> All content within our app is
              carefully filtered and monitored to ensure that it does no harm to
              children.
            </li>
            <li>
              <strong>Accessibility:</strong> These standards are prominently
              displayed within our app and on our website to ensure that all
              users understand our commitment to child safety.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. In-App Mechanism for User Feedback</h2>
          <ul>
            <li>
              <strong>Reporting Tools:</strong> Although the in-app mechanism
              for submitting feedback is currently under development, we are
              actively working on a robust solution that will allow users to
              submit concerns or reports regarding any content that may violate
              these standards.
            </li>
            <li>
              <strong>User Empowerment:</strong> We encourage our users to
              actively report any suspicious or harmful content, ensuring that
              our community remains safe and responsible.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Addressing CSAM</h2>
          <ul>
            <li>
              <strong>Prompt Action:</strong> Upon obtaining actual knowledge of
              any CSAM within our app, we commit to taking immediate and
              appropriate action. This includes, but is not limited to, the
              prompt removal of such content.
            </li>
            <li>
              <strong>Adherence to Guidelines:</strong> All actions are carried
              out in accordance with our published standards and in full
              compliance with relevant laws and regulations.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Compliance with Child Safety Laws</h2>
          <ul>
            <li>
              <strong>Legal Compliance:</strong> We self-certify that our app
              complies with all applicable child safety laws and regulations.
              This includes maintaining and implementing a process to report
              confirmed instances of CSAM to the National Center for Missing and
              Exploited Children, or the appropriate regional authority.
            </li>
            <li>
              <strong>Continuous Monitoring:</strong> Our policies are reviewed
              regularly to ensure ongoing adherence to legal requirements and
              emerging best practices in child safety.
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Child Safety Point of Contact</h2>
          <ul>
            <li>
              <strong>Designated Representative:</strong> We have appointed a
              dedicated Child Safety Point of Contact who is responsible for
              overseeing all reports and notifications related to CSAE.
            </li>
            <li>
              <strong>Accessible Contact Information:</strong> The contact
              details for this representative are provided within the app and on
              our website. This ensures that any potential notifications or
              concerns regarding child safety can be addressed swiftly and
              effectively.
            </li>
            <li>
              <strong>Authority and Responsibility:</strong> The designated
              representative is empowered to speak on our enforcement and review
              procedures and to take decisive action when necessary.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Conclusion</h2>
          <p>
            Our commitment to child safety is unwavering. By publishing these
            standards, integrating robust content filtering, and developing
            effective in-app feedback mechanisms, [Your Company Name] ensures
            that our community remains a safe space for all users. We
            continuously work to improve our processes and remain fully
            compliant with all relevant child safety laws and regulations.
          </p>
          <p>
            For further information on these requirements or to report any
            concerns, please visit our <a href="/help-center">Help Center</a> or
            contact our Child Safety Point of Contact directly at [Contact
            Information].
          </p>
        </section>
      </main>
    </>
  )
}

export default ChildSafetyPolicy
