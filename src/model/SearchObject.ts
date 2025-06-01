export default interface SearchObject {
    type: SearchType | null;
    min: number | null;
    max: number | null;
}
export type SearchType = "age"|"salary"