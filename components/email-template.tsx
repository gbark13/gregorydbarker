import type * as React from "react"

interface EmailTemplateProps {
  childName: string
  childAge: string
  attendance: string
  parentName: string
  email: string
  phone: string
  dietaryRestrictions: string
  additionalInfo: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  childName,
  childAge,
  attendance,
  parentName,
  email,
  phone,
  dietaryRestrictions,
  additionalInfo,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
    <h1 style={{ color: "#92400e", borderBottom: "2px solid #92400e", paddingBottom: "10px" }}>
      New Role Acceptance for "The Great Birthday Gold Rush"
    </h1>

    <p>A new child has {attendance === "yes" ? "accepted" : "declined"} a role in Bella's birthday movie!</p>

    <div style={{ background: "#fffbeb", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
      <h2 style={{ color: "#92400e", marginTop: "0" }}>Child Information:</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <strong>Name:</strong> {childName}
        </li>
        <li>
          <strong>Age:</strong> {childAge}
        </li>
        <li>
          <strong>Attending:</strong> {attendance === "yes" ? "Yes! Ready for the adventure!" : "No, cannot make it"}
        </li>
      </ul>
    </div>

    <div style={{ background: "#fffbeb", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
      <h2 style={{ color: "#92400e", marginTop: "0" }}>Parent/Guardian Information:</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          <strong>Name:</strong> {parentName}
        </li>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Phone:</strong> {phone}
        </li>
      </ul>
    </div>

    {(dietaryRestrictions || additionalInfo) && (
      <div style={{ background: "#fffbeb", padding: "15px", borderRadius: "5px" }}>
        <h2 style={{ color: "#92400e", marginTop: "0" }}>Additional Information:</h2>
        {dietaryRestrictions && (
          <p>
            <strong>Dietary Restrictions/Allergies:</strong> {dietaryRestrictions}
          </p>
        )}
        {additionalInfo && (
          <p>
            <strong>Additional Notes:</strong> {additionalInfo}
          </p>
        )}
      </div>
    )}

    <p style={{ fontSize: "14px", color: "#666", marginTop: "30px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
      Submitted on: {new Date().toLocaleString()}
    </p>
  </div>
)
