@extends('admin.layout.layout')
@section('css')
    <link rel="stylesheet" href="{{ asset('css/show_image.css') }}">
@endsection
@section('content')
    <div class="container">
        <div class="img-show">
            <img src="" alt="">
        </div>
        <div class="list-image" style="border: 1px solid red; width: 95%">
            <ul class="image">
                @foreach($pictures as $picture)
                    <li><img src="{{ $picture->file_path }}" alt=""></li>
                @endforeach
            </ul>
        </div>
    </div>
@endsection

@section('javascript')
    <script src="{{ asset('js/show_image.js') }}"></script>
@endsection