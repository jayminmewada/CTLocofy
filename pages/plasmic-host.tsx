import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import  group from "./group-component";
registerComponent(group,{
  name:'group',
  props:{},
    importPath:"./group-component.js"
})
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}