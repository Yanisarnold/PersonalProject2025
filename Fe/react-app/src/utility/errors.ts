class errors {
  name: string;
  email: string;
  message: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  setName(name: string) {
    this.name = name;
    if (!name) {
      this.name = 'Name is required.';
    }
    return this.name;
  }

  setEmail(email: string) {
    this.email = email;
    if (!email) {
      this.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      this.email = 'Email is invalid.';
    }
    return this.email;
  }

  setMessage(message: string) {
    this.message = message;
    if (!message) {
      this.message = 'Message is required.';
    } else if (message.length < 10) {
      this.message = 'Message must be at least 10 characters.';
    }
    return this.message;
  }
}

export default errors;
