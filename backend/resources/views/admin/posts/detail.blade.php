@extends('admin.layout.layout')
@section('content')
    <h3>{{ $post->title }}</h3>
    <div style="margin: 10px">{!! $post->content !!}</div>
@endsection