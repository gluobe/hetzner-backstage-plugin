import { TextEncoder, TextDecoder } from 'node:util';

/* @ts-ignore */
global.TextEncoder = TextEncoder;
/* @ts-ignore */
global.TextDecoder = TextDecoder;
