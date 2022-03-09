import { companyNameSchema, emailSchema, personNameSchema, urlSchema } from ".";

describe("testing person name field", () => {
  it('"John Doe" is a valid name', async () => {
    const isValid = await personNameSchema.isValid({ name: "John Doe" });
    expect(isValid).toBe(true);
  });
  it('"John Middle Doe" is a valid name', async () => {
    const isValid = await personNameSchema.isValid({ name: "John Middle Doe" });
    expect(isValid).toBe(true);
  });
  it('"J" is an invalid name', async () => {
    const isValid = await personNameSchema.isValid({ name: "J" });
    expect(isValid).toBe(false);
  });
  it('"J D" is an invalid name', async () => {
    const isValid = await personNameSchema.isValid({ name: "J D" });
    expect(isValid).toBe(false);
  });
  it(' "Test < name$" is an invalid name', async () => {
    const isValid = await personNameSchema.isValid({ name: "Test < name$" });
    expect(isValid).toBe(false);
  });
});

describe("testing email field", () => {
  it('"test.com" doesn\'t match email format', async () => {
    const isValid = await emailSchema.isValid({ email: "test.com" });
    expect(isValid).toBe(false);
  });
  it('"test@test.com" is a valid email', async () => {
    const isValid = await emailSchema.isValid({
      email: "test_abc.user@test.com",
    });
    expect(isValid).toBe(true);
  });
  it(`"<test@test.com" has invalid characters`, async () => {
    const isValid = await emailSchema.isValid({ email: '<"test@test.com' });
    expect(isValid).toBe(false);
  });
  it('"t@t.com" has length less than min length of 10', async () => {
    const isValid = await emailSchema.isValid({ email: "t@t.com" });
    expect(isValid).toBe(false);
  });
  it('"some_email_with_very.longlength@somedomainwhichisverylong.com" has length greater than max length of 50', async () => {
    const isValid = await emailSchema.isValid({
      email: "some_email_with_very.longlength@somedomainwhichisverylong.com",
    });
    expect(isValid).toBe(false);
  });
});

describe("testing company name field", () => {
  it(`"John & Doe Company" is a valid name`, async () => {
    const isValid = await companyNameSchema.isValid({
      name: "John & Doe Company",
    });
    expect(isValid).toBe(true);
  });
  it(`"John's Doe Company" is a valid name`, async () => {
    const isValid = await companyNameSchema.isValid({
      name: "John's Doe Company",
    });
    expect(isValid).toBe(true);
  });

  it(`"John < Doe Company" is an invalid name`, async () => {
    const isValid = await companyNameSchema.isValid({
      name: "John < Doe Company",
    });
    expect(isValid).toBe(false);
  });
  it(`"Some Company With Very Long Name" is an invalid name`, async () => {
    const isValid = await companyNameSchema.isValid({
      name: "Some Company With Very Long Name",
    });
    expect(isValid).toBe(false);
  });
});

describe("testing url field", () => {
  it(`"a invalid url" is an invalid url`, async () => {
    const isValid = await urlSchema.isValid({ url: "a invalid url" });
    expect(isValid).toBe(false);
  });
  it(`"abc.com" is an invalid url`, async () => {
    const isValid = await urlSchema.isValid({ url: "abc.com" });
    expect(isValid).toBe(false);
  });
  it(`"http://test.com" is an invalid url`, async () => {
    const isValid = await urlSchema.isValid({ url: "http://test.com" });
    expect(isValid).toBe(true);
  });
  it(`"https://www.test-site.com" is a valid url`, async () => {
    const isValid = await urlSchema.isValid({
      url: "https://www.test-site.com",
    });
    expect(isValid).toBe(true);
  });
  it(`"https://www.test<>.com" has invalid characters`, async () => {
    const isValid = await urlSchema.isValid({ url: "https://www.test<>.com" });
    expect(isValid).toBe(false);
  });
  it(`"javascript:alert('Don't laugh, this is not a joke!')"  has invalid protocal`, async () => {
    const isValid = await urlSchema.isValid({
      url: "javascript:alert('Don't laugh, this is not a joke!')",
    });
    expect(isValid).toBe(false);
  });
});
