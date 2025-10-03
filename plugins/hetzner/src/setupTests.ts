import { TextEncoder, TextDecoder } from 'node:util';

/* @ts-ignore */
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
