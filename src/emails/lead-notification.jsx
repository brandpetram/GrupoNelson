import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function LeadNotification({
  siteName = "gruponelson.mx",
  siteUrl = "https://gruponelson.mx",
  fields = [],
}) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo lead desde {siteName}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>Nuevo lead</Heading>

          <Text style={subheading}>
            Desde{" "}
            <Link href={siteUrl} target="_blank" style={siteLink}>
              {siteName}
            </Link>
          </Text>

          <Hr style={hr} />

          {fields.map((field, i) => (
            <Section key={i} style={fieldRow}>
              <Text style={fieldLabel}>{field.label}</Text>
              <Text style={fieldValue}>{field.value || "\u2014"}</Text>
            </Section>
          ))}

          <Hr style={hr} />

          <Text style={footer}>
            Este email fue enviado autom\u00e1ticamente por{" "}
            <Link href="https://brandpetram.com" target="_blank" style={footerLink}>
              Brandpetram
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

LeadNotification.PreviewProps = {
  siteName: "gruponelson.mx",
  siteUrl: "https://gruponelson.mx",
  fields: [
    { label: "Nombre", value: "Juan P\u00e9rez" },
    { label: "Email", value: "juan@empresa.com" },
    { label: "Tel\u00e9fono", value: "6861234567" },
    { label: "Empresa", value: "Acme Corp" },
    { label: "Inter\u00e9s", value: "Renta de nave industrial" },
    { label: "Mensaje", value: "Me interesa conocer disponibilidad en Nelson II" },
  ],
};

const body = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 24px 48px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#333333",
  margin: "40px 0 0",
  padding: "0",
};

const subheading = {
  fontSize: "16px",
  color: "#666666",
  margin: "8px 0 24px",
};

const siteLink = {
  color: "#2754C5",
  textDecoration: "underline",
  fontSize: "16px",
};

const hr = {
  borderColor: "#eeeeee",
  margin: "24px 0",
};

const fieldRow = {
  margin: "0",
  padding: "8px 0",
};

const fieldLabel = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#888888",
  margin: "0 0 2px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const fieldValue = {
  fontSize: "16px",
  color: "#333333",
  margin: "0",
  lineHeight: "24px",
};

const footer = {
  fontSize: "13px",
  color: "#ababab",
  margin: "0",
};

const footerLink = {
  color: "#898989",
  textDecoration: "underline",
  fontSize: "13px",
};
