import get from 'lodash/get';

export interface IAnyItemModel {
    id: string,
    firstValue: string
}

export default (data): IAnyItemModel => {
    return {
        id: get(data, 'id') || '',
        firstValue: get(data, 'values.first') || ''
    };
};
