use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn count_words(input: &str) -> usize {
    input.split_whitespace().count()
}

#[wasm_bindgen]
pub fn reverse_text(input: &str) -> String {
    input.chars().rev().collect()
}