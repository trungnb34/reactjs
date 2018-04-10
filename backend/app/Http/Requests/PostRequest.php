<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:posts,title',
            'abstract' => 'required',
            'contentText' => 'required',
            'category' => 'required',
            'tag' => 'required',
            'isOpen' => 'required',
            'image' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'A title is required',
            'title.unique'  => 'A title already exits',
            'abstract.required' => 'A abstract is required',
            'contentText.required' => 'A content is required',
            'category.required' => 'A category is required',
            'tag.required' => 'A tag is required',
            'isOpen.required' => 'A isOpen is required',
            'image.required' => 'A image is required',
        ];
    }
}
