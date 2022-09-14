import {RuleSetRule} from "webpack";


export function buildLoaders(): RuleSetRule[]{

    const typescriptLoaders =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoaders
    ]
}