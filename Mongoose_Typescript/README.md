---

# ⭐️ Getting Started

---

1. Create a project and install mongoose

```bash
npm install mongoose @types/mongoose
```

2. Create a 🗂Directory named models in SRC directory inside the root directory

3. Name a file, say user.ts to define the modal in that file.

---

# ➡️ Define the model

---

This is what the user.ts file looks like 

```tsx
import mongoose from 'mongoose';

/**
 * before defining a mongoose modal
 * we are going to define an interface in TS
 * that describes the properties that are 
 * required to create a new User
 */

interface UserAttrs {
	email: string;
	password: string;
}

/**
 * now we ill create another interface that 
 * describes the properties that a User model has
 */

interface UserModel extends mongoose.Model<UserDoc> {
	build(attrs: UserAttrs): UserDoc;
}

/**
 * we now create an interface that describes the properties
 * that a user document has
 */

interface UserDoc extends mongoose.Document {
	email: string;
	password: string;
	// createdAt: string;
	// updatedAt: strig;
}

/**
 * now we define our model using mongoose
 */
const userSchema = new mongoose.Schema({
	email:
		{
			type: String,
			required: true
		},
	password:
		{
			type: String,
			required: true
		}
});

/**
 * This is how we get a User
 */
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

/**
 * use can use the following build method to get a new user
 */

// const user = User.build({
// 	email: 'test@test.com',
// 	password: 'yayarya'
// });

export { User };
```

In comparison, this is what the JS version of the same looks like

```jsx
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	email:
		{
			type: String,
			required: true
		},
	password:
		{
			type: String,
			required: true
		}
});

const User = mongoose.model('User', userSchema);

export { User };
```