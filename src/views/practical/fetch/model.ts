export interface Commit {
  readonly html_url: string;
  readonly sha: string;
  readonly author: Author;
  readonly commit: Commit;
}

export interface Author {
    readonly login: string;
    readonly html_url: string;
    readonly name: string;
    readonly email: string;
    readonly date: string;
}

export interface Commit {
    readonly author: Author;
    readonly message: string;
}

