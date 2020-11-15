import React from 'react';
interface SerializeData extends React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement> {
    name: string;
    data: any;
}
export declare const SerializeData: React.FC<SerializeData>;
export declare const getSerializedData: (name: string, remove?: boolean) => any;
export {};
