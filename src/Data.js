export const getDataApi = async () => {
    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
    let response = await fetch(url);
    let commits = await response.json();
    return commits;
}