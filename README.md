# NgDigitalSignature

Module for integrate Digital Signature (simple-drawing-board) to Angular project with Components

## How use it like Module in a Project?

Install dependencies:

```
npm i simple-drawing-board
```

Move digital-signature folder to app folder in your Angular project. Import Digital Signature Module in modules when need the Digitan Signature:

```typescript
import { DigitalSignatureModule } from './digital-signature/digital-signature.module';
```

Then set it:

```typescript
imports: [
    DigitalSignatureModule
]
```

## Components
### Component DigitalSignComponent Inputs

* width: string (CSS data for width)
* height: string (CSS data for height)
* line: number (Line Weight)

### Component DigitalSignComponent Output

* eventDraw: Get coords while draw
* eventDrawBegin: Get coords when start to draw
* eventDrawEnd: Get coords when end to draw

---
Contact: ibuioli@gmail.com

