// automatically import the css file
import { ThingworxComposerWidget } from 'typescriptwebpacksupport';

@ThingworxComposerWidget
class QueryBuilder extends TWComposerWidget {

    widgetIconUrl(): string {
        return require('./images/icon.png');
    }

    widgetProperties(): TWWidgetProperties {
        require("./styles/ide.css");
        return {
            name: 'Query Builder',
            description: 'A query builder.',
            category: ['Common'],
            supportsAutoResize: true,
            properties: {
                Width: {
                    description: 'Total width of the widget.',
                    baseType: 'NUMBER',
                    isVisible: true,
                    defaultValue: 90,
                    isBindingTarget: false
                },
                Height: {
                    description: 'Total height of the widget.',
                    baseType: 'NUMBER',
                    isVisible: true,
                    defaultValue: 30,
                    isBindingTarget: false
                },
                Data: {
                    baseType: 'INFOTABLE',
                    description: 'The data set from which the searchable fields are derived.',
                    isBindingTarget: true
                },
                Query: {
                    baseType: 'QUERY',
                    description: 'The query',
                    isBindingSource: true,
                    isBindingTarget: true
                },
                UseFieldDescriptions: {
                    baseType: 'BOOLEAN',
                    description: 'If enabled, the query builder will use descriptions when available, instead of field names.',
                    defaultValue: false
                }
            }
        };
    };

    widgetServices(): Dictionary<TWWidgetService> {
        return {
            ClearQuery: {
                description: 'Clears the query.'
            }
        };
    };

    widgetEvents(): Dictionary<TWWidgetEvent> {
        return {
            QueryChanged: {
                description: 'Triggered when the query has changed.'
            }
        };
    }

    renderHtml(): string {
        return '<div class="widget-content widget-demo-viewer">test</div>';
    };

    afterRender(): void {
    }

    beforeDestroy(): void {
    }

}